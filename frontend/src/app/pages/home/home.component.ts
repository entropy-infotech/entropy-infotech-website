import { Component, inject, OnInit } from '@angular/core';
import { HeroSliderComponent } from '../../components/hero-slider/hero-slider.component';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSliderComponent, RouterLink],
  template: `
    <app-hero-slider></app-hero-slider>

    <!-- Call-To-Action (CTA) -->
    <section class="relative z-10 py-16 md:py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 border-y border-slate-800 shadow-2xl overflow-hidden">
      <!-- Background Accents -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
          Let’s Build Something Amazing Together
        </h2>
        <p class="text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
          Whether you're a startup or a growing business, we help you create fast, responsive, and scalable web solutions.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a routerLink="/contact" class="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:scale-105 w-full sm:w-auto text-lg leading-none flex items-center justify-center gap-2">
            Start a Project
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Services Quick View -->
    <section class=\"relative z-10 py-16 md:py-24 bg-white\">
      <div class=\"container mx-auto px-6\">
        <div class=\"text-center mb-12 md:mb-20\">
          <h2 class=\"text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight\">
            Core Competencies
          </h2>
          <p class=\"text-slate-500 max-w-2xl mx-auto text-base md:text-lg\">
            We specialize in various domains to provide end-to-end digital
            solutions for modern businesses.
          </p>
        </div>

        <div class=\"grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto\">
          <!-- Web Development -->
          <a
            routerLink=\"/services/web-development\"
            class=\"p-8 md:p-10 rounded-3xl bg-slate-50 hover:bg-blue-50 transition-all group cursor-pointer block hover:shadow-2xl hover:-translate-y-2 border border-slate-100\"
          >
            <div
              class=\"w-16 h-16 md:w-20 md:h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm\"
            >
              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-8 w-8 md:h-10 md:w-10\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4\" />
              </svg>
            </div>
            <h3 class=\"text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors italic text-center\">Web Development</h3>
            <p class=\"text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-6 text-center\">
              High-performance web applications tailored to your business needs using cutting-edge tech.
            </p>
            <div class=\"flex items-center justify-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all\">
              Learn More 
              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\" />
              </svg>
            </div>
          </a>

          <!-- Analytics Dashboards -->
          <a
            routerLink=\"/services/analytics-dashboards\"
            class=\"p-8 md:p-10 rounded-3xl bg-slate-50 hover:bg-indigo-50 transition-all group cursor-pointer block hover:shadow-2xl hover:-translate-y-2 border border-slate-100\"
          >
            <div
              class=\"w-16 h-16 md:w-20 md:h-20 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm\"
            >
              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-8 w-8 md:h-10 md:w-10\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\" />
              </svg>
            </div>
            <h3 class=\"text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors italic text-center\">Analytics Dashboards</h3>
            <p class=\"text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-6 text-center\">
              Transform raw data into actionable insights with real-time, interactive dashboards.
            </p>
            <div class=\"flex items-center justify-center gap-2 text-indigo-600 font-bold group-hover:gap-3 transition-all\">
              Learn More 
              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\" />
              </svg>
            </div>
          </a>

          <!-- Graphic Design -->
          <a
            routerLink=\"/services/graphic-design\"
            class=\"p-8 md:p-10 rounded-3xl bg-slate-50 hover:bg-rose-50 transition-all group cursor-pointer block hover:shadow-2xl hover:-translate-y-2 border border-slate-100\"
          >
            <div
              class=\"w-16 h-16 md:w-20 md:h-20 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-sm\"
            >
              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-8 w-8 md:h-10 md:w-10\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\" />
              </svg>
            </div>
            <h3 class=\"text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-rose-600 transition-colors italic text-center\">Graphic Design</h3>
            <p class=\"text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-6 text-center\">
              Stunning visual communication that elevates your brand and captivates your audience.
            </p>
            <div class=\"flex items-center justify-center gap-2 text-rose-600 font-bold group-hover:gap-3 transition-all\">
              Learn More 
              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17 8l4 4m0 0l-4 4m4-4H3\" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Careers Quick View -->
    <section class="relative z-10 py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12 md:mb-20">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Join Our Team
          </h2>
          <p class="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
            We are always looking for passionate people to join us. Explore our open roles and internship programs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          <!-- Frontend Developer -->
          <a
            routerLink="/careers/internships/frontend-developer"
            class="p-8 md:p-10 rounded-3xl bg-white hover:bg-emerald-50 transition-all group cursor-pointer block hover:shadow-2xl hover:-translate-y-2 border border-slate-100"
          >
            <div
              class="w-16 h-16 md:w-20 md:h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors italic text-center">Frontend Developer</h3>
            <p class="text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-6 text-center">
              Build stunning user interfaces and seamless experiences with modern web frameworks.
            </p>
            <div class="flex items-center justify-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all">
              Apply Now 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>

          <!-- UI/UX Designer -->
          <a
            routerLink="/careers/internships/ui-ux-designer"
            class="p-8 md:p-10 rounded-3xl bg-white hover:bg-fuchsia-50 transition-all group cursor-pointer block hover:shadow-2xl hover:-translate-y-2 border border-slate-100"
          >
            <div
              class="w-16 h-16 md:w-20 md:h-20 bg-fuchsia-100 text-fuchsia-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-fuchsia-600 transition-colors italic text-center">UI/UX Designer</h3>
            <p class="text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-6 text-center">
              Craft intuitive and visually appealing digital experiences that users love.
            </p>
            <div class="flex items-center justify-center gap-2 text-fuchsia-600 font-bold group-hover:gap-3 transition-all">
              Apply Now 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>

          <!-- Backend Developer -->
          <a
            routerLink="/careers/internships/backend-developer"
            class="p-8 md:p-10 rounded-3xl bg-white hover:bg-cyan-50 transition-all group cursor-pointer block hover:shadow-2xl hover:-translate-y-2 border border-slate-100"
          >
            <div
              class="w-16 h-16 md:w-20 md:h-20 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 md:h-10 md:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-4 text-slate-900 group-hover:text-cyan-600 transition-colors italic text-center">Backend Developer</h3>
            <p class="text-slate-600 leading-relaxed text-sm md:text-base font-medium mb-6 text-center">
              Architect robust APIs and scalable cloud infrastructure to power apps.
            </p>
            <div class="flex items-center justify-center gap-2 text-cyan-600 font-bold group-hover:gap-3 transition-all">
              Apply Now 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
        
        <div class="text-center mt-12 md:mt-16">
          <a routerLink="/careers" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 active:scale-95">
            View All Openings
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HomeComponent {}
