import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seo-intern',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-slate-50 min-h-screen">
      <!-- Search-Centric Hero Section -->
      <section class="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="assets/images/carrer.jpg" alt="SEO Internship" class="w-full h-full object-cover object-center translate-y-[-15%]" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/30 z-10"></div>
        
        <div class="relative z-20 container mx-auto px-6 text-center mt-12 animate-fade-in-up">
          <div class="inline-block bg-teal-600/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-teal-500/30">
            <span class="text-teal-100 font-semibold tracking-widest text-sm uppercase">Growth & Visibility Hiring</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            SEO Intern
          </h1>
          <p class="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            Master the art and science of search engine rankings and digital growth.
          </p>
        </div>
      </section>

      <!-- Details Content -->
      <section class="py-24">
        <div class="container mx-auto px-6">
          <div class="max-w-4xl mx-auto space-y-16">
            
            <!-- Overview Card -->
            <div class="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm">
              <div class="mb-12">
                <h2 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div class="w-2 h-8 bg-teal-500 rounded-full"></div>
                  Role Overview
                </h2>
                <p class="text-slate-600 text-lg leading-relaxed font-medium">
                  We are looking for a motivated **SEO Intern** to join our team and help improve website visibility and search engine rankings. This internship is ideal for students or recent graduates who want to learn practical **Search Engine Optimization (SEO)** by working on real websites and digital projects.
                </p>
              </div>

              <!-- Quick Facts Grid -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                  <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                  <p class="font-bold text-slate-900">3 Months</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                  <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</p>
                  <p class="font-bold text-slate-900">Remote</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                  <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Stipend</p>
                  <p class="font-bold text-slate-900 text-sm">Learning focus</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center">
                  <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Eligibility</p>
                  <p class="font-bold text-slate-900 text-xs">Open to All</p>
                </div>
              </div>

              <!-- Content Rows -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 class="text-lg font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Responsibilities</h3>
                  <ul class="space-y-4">
                    <li *ngFor="let item of responsibilities" class="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <svg class="h-5 w-5 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-lg font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Requirements</h3>
                  <ul class="space-y-4">
                    <li *ngFor="let req of requirements" class="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <svg class="h-5 w-5 text-teal-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                      </svg>
                      {{ req }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Gains Section -->
            <div class="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-teal-500/10">
              <div class="relative z-10">
                <h3 class="text-3xl font-black mb-10 flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  What You Will Gain
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div *ngFor="let gain of gains" class="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <span class="font-bold text-slate-100">{{ gain }}</span>
                  </div>
                </div>
              </div>
              <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-teal-600/10 blur-[100px] rounded-full"></div>
            </div>

            <!-- Application Section -->
            <div class="bg-white border-2 border-slate-100 rounded-[2.5rem] p-12 text-center">
              <h3 class="text-2xl font-black text-slate-900 mb-4">Master SEO on Real Projects</h3>
              <p class="text-slate-500 font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                If you are interested in digital marketing and want to learn how websites rank on search engines, we would love to hear from you.
              </p>
              <div class="flex flex-col md:flex-row items-center justify-center gap-4">
                <a routerLink="/careers/apply" [queryParams]="{role: 'SEO Intern'}" class="w-full md:w-auto bg-slate-900 hover:bg-black text-white px-12 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10 text-center">
                  Apply with Resume
                </a>
                <a routerLink="/careers" class="w-full md:w-auto bg-slate-100 hover:bg-slate-200 text-slate-900 px-12 py-5 rounded-2xl font-black transition-all">
                  Back to Careers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class SeoInternComponent {
  responsibilities = [
    'Assist in keyword research and competitor analysis',
    'Optimize website pages for search engines (on-page SEO)',
    'Help improve website structure and content for better rankings',
    'Monitor website performance using SEO tools',
    'Write blogs and SEO-friendly content for the website',
    'Assist in backlink building and off-page SEO activities'
  ];

  requirements = [
    'Basic understanding of SEO concepts and search engines',
    'Familiarity with Search Console or Analytics (preferred)',
    'Basic knowledge of HTML tags and meta tags',
    'Own laptop and stable internet connection',
    'Good research and analytical skills',
    'Willingness to learn and build real-world visibility'
  ];

  gains = [
    'Hands-on experience on real SEO projects',
    'Practical knowledge of website optimization strategies',
    'Opportunity to build a digital marketing portfolio',
    'Internship Certificate upon successful completion',
    'Letter of Recommendation for top performance'
  ];
}
