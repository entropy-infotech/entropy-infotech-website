import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-manage-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <div class="max-w-6xl mx-auto">
        <header class="flex justify-between items-center mb-12">
          <div class="flex items-center gap-4">
            <a routerLink="/admin/dashboard" class="p-2 hover:bg-slate-900 rounded-lg transition-colors border border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
            <h1 class="text-3xl font-bold tracking-tight">Manage Blog Posts</h1>
          </div>
          <a routerLink="/admin/create-blog" 
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            New Post
          </a>
        </header>

        <div class="grid grid-cols-1 gap-4">
          <div *ngFor="let blog of blogs" 
               class="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between group hover:border-slate-700 transition-all hover:bg-slate-800/50">
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-1">{{ blog.title }}</h3>
              <p class="text-slate-400 text-sm flex items-center gap-2">
                <span>{{ blog.createdAt | date:'mediumDate' }}</span>
                <span class="w-1 h-1 bg-slate-700 rounded-full"></span>
                <span>By {{ blog.author?.username }}</span>
              </p>
            </div>
            
            <div class="flex items-center gap-3">
              <a [routerLink]="['/admin/edit-blog', blog._id]" 
                class="p-2 bg-blue-500/10 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </a>
              <button (click)="deleteBlog(blog._id)" 
                class="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>

          <div *ngIf="blogs.length === 0" class="text-center py-20 bg-slate-900 rounded-2xl border-2 border-dashed border-slate-800">
            <p class="text-slate-500">No blog posts found. Start by creating one!</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ManageBlogComponent implements OnInit {
  blogs: any[] = [];
  private http = inject(HttpClient);

  ngOnInit() {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.http.get<any[]>(`${environment.apiUrl}/blogs`).subscribe((res) => {
      this.blogs = res;
    });
  }

  deleteBlog(id: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.http.delete(`${environment.apiUrl}/blogs/${id}`, { withCredentials: true }).subscribe(() => {
        this.fetchBlogs();
      });
    }
  }
}
