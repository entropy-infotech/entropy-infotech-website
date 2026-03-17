import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  template: `
    <header class="bg-indigo-900 py-32 text-white relative overflow-hidden">
      <div
        class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <h1 class="text-6xl font-black mb-6 tracking-tighter">
          Selected <span class="text-indigo-400">Works</span>
        </h1>
        <p class="text-xl text-indigo-200 max-w-xl font-medium">
          A showcase of projects where we've pushed the boundaries of what's
          possible on the web.
        </p>
      </div>
    </header>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Project 1 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-video bg-slate-200 rounded-3xl mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"
              ></div>
              <div class="p-12 h-full flex items-end">
                <span
                  class="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >View Case Study &rarr;</span
                >
              </div>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">
              FinTech Dashboard
            </h3>
            <p
              class="text-slate-500 uppercase font-bold text-xs tracking-widest"
            >
              Angular • Node.js • D3.js
            </p>
          </div>

          <!-- Project 2 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-video bg-slate-100 rounded-3xl mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"
              ></div>
              <div class="p-12 h-full flex items-end">
                <span
                  class="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >View Case Study &rarr;</span
                >
              </div>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">
              E-Commerce Ecosystem
            </h3>
            <p
              class="text-slate-500 uppercase font-bold text-xs tracking-widest"
            >
              MEAN Stack • Stripe • Tailwind
            </p>
          </div>

          <!-- Project 3 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-video bg-slate-200 rounded-3xl mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"
              ></div>
              <div class="p-12 h-full flex items-end">
                <span
                  class="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >View Case Study &rarr;</span
                >
              </div>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">
              HealthTech Platform
            </h3>
            <p
              class="text-slate-500 uppercase font-bold text-xs tracking-widest"
            >
              Angular Standalone • MongoDB
            </p>
          </div>

          <!-- Project 4 -->
          <div class="group cursor-pointer">
            <div
              class="aspect-video bg-slate-300 rounded-3xl mb-6 overflow-hidden relative"
            >
              <div
                class="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity"
              ></div>
              <div class="p-12 h-full flex items-end">
                <span
                  class="text-indigo-600 font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >View Case Study &rarr;</span
                >
              </div>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">
              Real Estate Portal
            </h3>
            <p
              class="text-slate-500 uppercase font-bold text-xs tracking-widest"
            >
              Fullstack JS • Google Maps API
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class PortfolioComponent {}
