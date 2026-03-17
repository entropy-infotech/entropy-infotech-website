import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="bg-slate-50 min-h-screen">
      <!-- Header -->
      <header class="bg-rose-500 py-24 text-white text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgMGgxMHYxMEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div class="container mx-auto px-6 relative z-10 text-left md:text-center">
          <div class="inline-block bg-rose-400/50 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-rose-300/50">
            <span class="text-rose-50 font-semibold tracking-wider text-sm">SERVICE</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Graphic Design</h1>
          <p class="text-rose-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Stunning visual communication that elevates your brand and captivates your audience.
          </p>
        </div>
      </header>

      <!-- Main Content Block -->
      <section class="py-20">
        <div class="container mx-auto px-6">
          <div class="flex flex-col lg:flex-row gap-16">
            <!-- Left text -->
            <div class="lg:w-1/2">
              <h2 class="text-4xl font-bold text-slate-900 mb-6">Stand Out in a Crowded Market</h2>
              <p class="text-slate-600 text-lg leading-relaxed mb-6">
                Your visual identity is the first thing your customers notice. We craft compelling graphics that not only look spectacular but also communicate your brand's core values instantly.
              </p>
              <p class="text-slate-600 text-lg leading-relaxed mb-8">
                From complete branding overhauls to ongoing marketing material creation, our designers bring a strategic approach to aesthetics, ensuring every pixel serves a purpose.
              </p>
              
              <h3 class="text-2xl font-bold text-slate-900 mb-4">Our Creative Services:</h3>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-rose-100 text-rose-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium"><strong class="font-bold text-slate-900">Brand Identity & Logos:</strong> Creating memorable logos and cohesive visual systems.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-rose-100 text-rose-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium"><strong class="font-bold text-slate-900">Marketing & Promotional Collateral:</strong> Flyers, brochures, and digital ad creative.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-rose-100 text-rose-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium"><strong class="font-bold text-slate-900">Social Media Kits:</strong> Engaging templates designed specifically for platform algorithms.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="mt-1 bg-rose-100 text-rose-600 p-1 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg></div>
                  <span class="text-slate-700 font-medium"><strong class="font-bold text-slate-900">Custom Illustrations & Iconography:</strong> Unique artwork that sets you apart from competitors using stock assets.</span>
                </li>
              </ul>
            </div>

            <!-- Right Visual / Feature Cards -->
            <div class="lg:w-1/2">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                <!-- Mini Card 1 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform">
                  <div class="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Visual Consistency</h4>
                  <p class="text-sm text-slate-500">Developing comprehensive brand guidelines to ensure your company always looks its best.</p>
                </div>
                <!-- Mini Card 2 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform sm:translate-y-8">
                  <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1h-4l-2 1v4l2 1h4l2-1V4z" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Print & Digital</h4>
                  <p class="text-sm text-slate-500">Assets properly formatted and optimized whether they're going to a commercial printer or a digital feed.</p>
                </div>
                <!-- Mini Card 3 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform">
                  <div class="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 01-2 2z" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Typography Masters</h4>
                  <p class="text-sm text-slate-500">Expert selection and pairing of fonts to reinforce your brand's unique tone of voice.</p>
                </div>
                <!-- Mini Card 4 -->
                <div class="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform sm:translate-y-8">
                  <div class="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                  <h4 class="text-lg font-bold text-slate-900 mb-2">Fast Turnaround</h4>
                  <p class="text-sm text-slate-500">Agile design processes that get high-quality assets in your hands when you need them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 bg-slate-900 text-white mt-12">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Rebrand?</h2>
          <p class="text-slate-400 max-w-2xl mx-auto mb-10 text-lg">Let's collaborate to build a visual identity that resonates with your customers and leaves a lasting impression.</p>
          <a routerLink="/contact" class="inline-block px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold transition-colors shadow-lg shadow-rose-600/30">Start the Design Process</a>
        </div>
      </section>
    </div>
  `
})
export class GraphicDesignComponent {

}
