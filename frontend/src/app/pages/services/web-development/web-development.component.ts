import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-slate-50 min-h-screen">
      <!-- Header -->
      <header class="bg-blue-600 py-24 text-white text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgMGgxMHYxMEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div class="container mx-auto px-6 relative z-10 text-left md:text-center">
          <div class="inline-block bg-blue-500/50 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-blue-400/50">
            <span class="text-blue-50 font-semibold tracking-wider text-sm">SERVICE</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Web Development</h1>
          <p class="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            High-performance, scalable, and secure web applications tailored to your business needs. We bring your vision to life on the modern web.
          </p>
        </div>
      </header>

      <!-- Main Content Block -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row gap-16">
            <!-- Left text -->
            <div class="lg:w-1/2">
              <h2 class="text-4xl font-bold text-slate-900 mb-6">Building the Future of Your Business</h2>
              <p class="text-slate-600 text-lg leading-relaxed mb-6">
                In today's digital landscape, a powerful web presence is non-negotiable. Our web development team focuses on creating seamless, intuitive, and lightning-fast applications that serve as the backbone for your modern business operations.
              </p>
              <p class="text-slate-600 text-lg leading-relaxed mb-8">
                From simple landing pages to complex Enterprise Resource Planning (ERP) systems, we leverage the latest in frontend and backend technologies to guarantee a robust technical foundation.
              </p>
              
              <h3 class="text-2xl font-bold text-slate-900 mb-4">Our Expertise Include:</h3>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium">Single Page Applications (SPA) with Angular & React</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium">Progressive Web Apps (PWA) for native-like experiences</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium">E-commerce Platforms and Custom CMS integration</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium">Robust Node.js / Python Backend API Architectures</span>
                </li>
              </ul>
            </div>

            <!-- Right Visual / Feature Cards -->
            <div class="lg:w-1/2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                <!-- Mini Card 1 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform">
                  <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">High Performance</h4>
                  <p class="text-sm text-slate-500">Optimized asset delivery, edge caching, and lightweight bundle sizes ensure sub-second load times.</p>
                </div>
                <!-- Mini Card 2 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform sm:translate-y-8">
                  <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Secure by Design</h4>
                  <p class="text-sm text-slate-500">Implementation of OWASP security standards, strict data validation, and secure authentication flows.</p>
                </div>
                <!-- Mini Card 3 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform">
                  <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Highly Scalable</h4>
                  <p class="text-sm text-slate-500">Microservices architecture designed to scale seamlessly horizontally as your user base grows.</p>
                </div>
                <!-- Mini Card 4 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform sm:translate-y-8">
                  <div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 01-2 2z" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Mobile First</h4>
                  <p class="text-sm text-slate-500">Fully responsive layouts testing across hundreds of devices ensuring flawless mobile interactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 bg-slate-900 text-white mt-12">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p class="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">Let's discuss how our web development team can help you reach your goals and deliver an unmatched experience to your users.</p>
          <a routerLink="/contact" class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-600/30">Start Your Project</a>
        </div>
      </section>
    </div>
  `,
})
export class WebDevelopmentComponent {
}
