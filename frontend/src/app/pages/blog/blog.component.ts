import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';
import { Blog } from '../../models/blog';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, BlogCardComponent],
  template: `
    <header class="bg-slate-50 py-24 border-b border-slate-200">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl font-black mb-6 tracking-tighter text-slate-900">
          The
          <span class="text-blue-600 italic underline">Entropy</span> Journal
        </h1>
        <p class="text-xl text-slate-500 max-w-2xl mx-auto">
          Insights, stories, and engineering excellence from the forefront of
          the digital revolution.
        </p>
      </div>
    </header>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <ng-container *ngIf="blogs.length > 0; else noBlogs">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <app-blog-card
              *ngFor="let blog of blogs"
              [blog]="blog"
            ></app-blog-card>
          </div>
        </ng-container>

        <ng-template #noBlogs>
          <div
            class="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300"
          >
            <div class="text-slate-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900">No stories yet</h3>
            <p class="text-slate-500">
              Check back soon for our latest updates.
            </p>
          </div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [],
})
export class BlogComponent implements OnInit {
  private blogService = inject(BlogService);
  private seo = inject(SeoService);
  blogs: Blog[] = [];

  ngOnInit() {
    this.seo.updateMetaTags(
      'Blog',
      'Insights, stories, and engineering excellence from Entropy Infotech. Stay updated with the latest in technology and digital solutions.'
    );
    this.blogService.getBlogs().subscribe({
      next: (data) => (this.blogs = data),
      error: (err) => console.error('Error fetching blogs:', err),
    });
  }
}
