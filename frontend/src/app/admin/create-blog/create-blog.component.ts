import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-white p-8">
      <div class="max-w-4xl mx-auto">
        <header class="flex justify-between items-center mb-12">
          <div class="flex items-center gap-4">
            <a routerLink="/admin/manage-blog" class="p-2 hover:bg-slate-900 rounded-lg transition-colors border border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <h1 class="text-3xl font-bold">{{ isEdit ? 'Edit' : 'Create' }} Blog Post</h1>
          </div>
          <button (click)="saveBlog()" [disabled]="loading"
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
            <span *ngIf="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            {{ isEdit ? 'Update' : 'Publish' }} Post
          </button>
        </header>

        <div class="space-y-8">
          <section class="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest text-[10px]">Title</label>
                <input type="text" [(ngModel)]="blog.title" placeholder="Enter post title..."
                  class="w-full bg-slate-800 border-slate-700 rounded-xl text-white px-6 py-4 text-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600">
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest text-[10px]">Short Description</label>
                <textarea [(ngModel)]="blog.content" rows="3" placeholder="What's this post about?"
                  class="w-full bg-slate-800 border-slate-700 rounded-xl text-white px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"></textarea>
              </div>
            </div>
          </section>

          <section class="space-y-6">
            <div class="flex justify-between items-center px-4">
              <h3 class="text-lg font-bold text-slate-300">Content Sections</h3>
              <button (click)="addSection()" class="text-blue-500 hover:text-blue-400 text-sm font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Add Section
              </button>
            </div>

            <div *ngFor="let section of blog.sections; let i = index" 
                 class="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl relative group animate-in fade-in slide-in-from-bottom-4 duration-300">
              <button (click)="removeSection(i)" 
                class="absolute -right-2 -top-2 w-8 h-8 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:scale-110 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div class="space-y-6">
                <input type="text" [(ngModel)]="section.heading" placeholder="Section Heading"
                  class="w-full bg-transparent border-b border-slate-800 text-lg font-bold text-white py-2 focus:border-blue-500 outline-none transition-colors placeholder:text-slate-700">
                <textarea [(ngModel)]="section.body" rows="6" placeholder="Section content (Markdown supported)..."
                  class="w-full bg-slate-800/50 border-slate-800 rounded-xl text-white px-6 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-700"></textarea>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
})
export class CreateBlogComponent implements OnInit {
  blog: any = {
    title: '',
    content: '',
    sections: [{ heading: '', body: '' }]
  };
  isEdit = false;
  loading = false;
  
  private http = inject(HttpClient);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.fetchBlog(id);
    }
  }

  fetchBlog(id: string) {
    this.http.get(`${environment.apiUrl}/blogs/${id}`).subscribe((res: any) => {
      this.blog = res;
    });
  }

  addSection() {
    this.blog.sections.push({ heading: '', body: '' });
  }

  removeSection(index: number) {
    this.blog.sections.splice(index, 1);
  }

  saveBlog() {
    this.loading = true;
    const observer = {
      next: () => {
        this.router.navigate(['/admin/manage-blog']);
      },
      error: (err: any) => {
        alert('Error saving blog: ' + err.message);
        this.loading = false;
      }
    };

    if (this.isEdit) {
      this.http.put(`${environment.apiUrl}/blogs/${this.blog._id}`, this.blog, { withCredentials: true })
        .subscribe(observer);
    } else {
      this.http.post(`${environment.apiUrl}/blogs`, this.blog, { withCredentials: true })
        .subscribe(observer);
    }
  }

  hasUnsavedChanges(): boolean {
    return this.blog.title || this.blog.content;
  }
}
