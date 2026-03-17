import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../models/blog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <article
      class="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
    >
      <div class="h-48 bg-slate-200 animate-pulse relative">
        <div
          class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-widest"
        >
          TECH
        </div>
      </div>
      <div class="p-8">
        <div
          class="flex items-center text-xs font-medium text-slate-400 mb-4 space-x-2"
        >
          <span>{{ blog.createdAt | date: 'mediumDate' }}</span>
          <span>•</span>
          <span>By Admin</span>
        </div>
        <h3
          class="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight leading-tight"
        >
          {{ blog.title }}
        </h3>
        <p class="text-slate-500 mb-6 line-clamp-2 text-sm leading-relaxed">
          {{ blog.content }}
        </p>
        <a
          [routerLink]="['/blog', blog._id]"
          class="text-blue-600 font-bold text-sm inline-flex items-center group-hover:underline"
        >
          Read Story
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </article>
  `,
  styles: [],
})
export class BlogCardComponent {
  @Input({ required: true }) blog!: Blog;
}
