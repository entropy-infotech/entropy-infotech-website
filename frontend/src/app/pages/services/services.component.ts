import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- High-End Hero Section -->
    <section class="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="assets/images/services.jpg" alt="Our Services at Entropy Infotech" class="w-full h-full object-cover object-center" />
      </div>
      
      <!-- Dark Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10 z-10"></div>
      
      <!-- Content -->
      <div class="relative z-20 container mx-auto px-6 text-center mt-12 transition-all duration-1000 animate-fade-in-up">
        <div class="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-6 border border-white/20">
          <span class="text-blue-200 font-semibold tracking-widest text-xs md:text-sm uppercase">What We Do</span>
        </div>
        <h1 class="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
          Our Services
        </h1>
        <p class="text-xl md:text-2xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
          Discover how we can transform your business with our tailored digital services. We build solutions that scale.
        </p>
      </div>
    </section>

    <div class="bg-slate-50 min-h-screen pb-24">
      
      <!-- Web Development Service Node -->
      <section class="py-20 bg-white border-b border-slate-200 overflow-hidden">
        <div class="container mx-auto px-6 max-w-5xl">
          <div class="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div class="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-inner">
              01
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-4 text-slate-900">
                Web Development
              </h3>
              <p class="text-slate-600 text-lg leading-relaxed mb-4 max-w-3xl">
                We build high-performance, responsive web applications tailored to your business needs using cutting-edge technologies. From local retail to massive hospital networks, we craft solutions that scale.
              </p>
              <a routerLink="/services/web-development" class="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors bg-blue-50 px-4 py-2 rounded-lg mt-2">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Web Dev Marquee -->
        <div class="relative flex overflow-x-hidden bg-slate-900 text-white py-6 mt-8 shadow-inner border-y border-slate-800">
          <div class="absolute z-10 w-24 h-full left-0 top-0 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
          <div class="absolute z-10 w-24 h-full right-0 top-0 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
          
          <div class="animate-marquee whitespace-nowrap flex items-center shrink-0 min-w-full justify-around space-x-12 px-6">
            <span class="text-2xl font-black italic tracking-widest text-blue-200">RESTAURANT</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-300">CLINIC</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-400">HOSPITAL</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-200">RETAIL STORE</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-300">COACHING INSTITUTES</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-400">GYM</span>
            <span class="text-slate-600 font-bold">•</span>
          </div>

          <div aria-hidden="true" class="animate-marquee whitespace-nowrap flex items-center shrink-0 min-w-full justify-around space-x-12 px-6">
            <span class="text-2xl font-black italic tracking-widest text-blue-200">RESTAURANT</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-300">CLINIC</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-400">HOSPITAL</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-200">RETAIL STORE</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-300">COACHING INSTITUTES</span>
            <span class="text-slate-600 font-bold">•</span>
            <span class="text-2xl font-black italic tracking-widest text-blue-400">GYM</span>
            <span class="text-slate-600 font-bold">•</span>
          </div>
        </div>
      </section>

      <!-- Analytics Dashboards Service Node -->
      <section class="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
        <div class="container mx-auto px-6 max-w-5xl">
          <div class="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div class="flex-shrink-0 w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-inner">
              02
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-4 text-slate-900">
                Analytics Dashboards
              </h3>
              <p class="text-slate-600 text-lg leading-relaxed mb-4 max-w-3xl">
                Transform raw data into actionable insights with interactive, real-time analytics dashboards that empower decision-making. Stop guessing and start knowing.
              </p>
              <a routerLink="/services/analytics-dashboards" class="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors bg-indigo-100 px-4 py-2 rounded-lg mt-2">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Dashboard Marquee -->
        <div class="relative flex overflow-x-hidden pt-4 pb-12 mt-8">
           <div class="absolute z-10 w-32 h-full left-0 top-0 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
           <div class="absolute z-10 w-32 h-full right-0 top-0 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
           
           <div class="animate-marquee-slow flex shrink-0 min-w-full justify-around space-x-8 px-4 items-center">
             <!-- Mock Dashboard 1 -->
             <div class="w-80 h-48 bg-white rounded-xl shadow-lg border border-slate-200 p-4 flex flex-col justify-between shrink-0">
                <div class="flex justify-between items-center border-b border-slate-100 pb-2"><div class="w-1/2 h-4 bg-slate-200 rounded"></div><div class="w-8 h-4 bg-emerald-100 rounded"></div></div>
                <div class="flex items-end h-20 gap-2 w-full mt-4">
                  <div class="w-1/5 bg-indigo-200 h-[40%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-300 h-[60%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-400 h-[30%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-500 h-[80%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-600 h-[100%] rounded-t-sm"></div>
                </div>
             </div>
             <!-- Mock Dashboard 2 -->
             <div class="w-80 h-48 bg-white rounded-xl shadow-lg border border-slate-200 p-4 shrink-0 flex gap-4">
                <div class="w-1/3 h-full rounded-full border-[12px] border-amber-400 flex items-center justify-center shrink-0"></div>
                <div class="w-2/3 flex flex-col justify-center space-y-4">
                  <div class="w-full h-8 bg-slate-100 rounded flex items-center px-2"><div class="w-2/3 h-2 bg-amber-400 rounded-full"></div></div>
                  <div class="w-full h-8 bg-slate-100 rounded flex items-center px-2"><div class="w-1/2 h-2 bg-rose-400 rounded-full"></div></div>
                  <div class="w-full h-8 bg-slate-100 rounded flex items-center px-2"><div class="w-3/4 h-2 bg-blue-400 rounded-full"></div></div>
                </div>
             </div>
             <!-- Mock Dashboard 3 -->
             <div class="w-80 h-48 bg-slate-900 rounded-xl shadow-lg border border-slate-700 p-4 flex flex-col justify-between shrink-0">
                <div class="flex justify-between items-center border-b border-slate-700 pb-2"><div class="w-1/2 h-4 bg-slate-700 rounded"></div></div>
                <div class="flex items-center justify-center h-24 mt-4 relative">
                  <div class="absolute w-full h-[2px] bg-slate-700"></div>
                  <!-- Line chart mock using div rotation -->
                  <div class="absolute left-0 w-12 h-[2px] bg-emerald-400 rotate-12 origin-left"></div>
                  <div class="absolute left-12 top-[-2px] w-16 h-[2px] bg-emerald-400 -rotate-12 origin-left"></div>
                  <div class="absolute left-28 top-[-15px] w-16 h-[2px] bg-emerald-400 rotate-45 origin-left"></div>
                  <div class="absolute left-40 top-[20px] w-20 h-[2px] bg-emerald-400 -rotate-[30deg] origin-left"></div>
                </div>
             </div>
             <!-- Mock Dashboard 4 -->
               <div class="w-80 h-48 bg-white rounded-xl shadow-lg border border-slate-200 p-4 grid grid-cols-2 gap-2 content-between shrink-0">
                  <div class="bg-indigo-50 rounded p-2"><div class="text-xs text-indigo-400">USERS</div><div class="text-lg font-bold">12K</div></div>
                  <div class="bg-rose-50 rounded p-2"><div class="text-xs text-rose-400">BOUNCE</div><div class="text-lg font-bold">42%</div></div>
                  <div class="bg-emerald-50 rounded p-2"><div class="text-xs text-emerald-400">CONV.</div><div class="text-lg font-bold">3.4%</div></div>
                  <div class="bg-amber-50 rounded p-2"><div class="text-xs text-amber-400">TIME</div><div class="text-lg font-bold">2m:13</div></div>
               </div>
           </div>

           <div aria-hidden="true" class="animate-marquee-slow flex shrink-0 min-w-full justify-around space-x-8 px-4 items-center pl-8">
             <div class="w-80 h-48 bg-white rounded-xl shadow-lg border border-slate-200 p-4 flex flex-col justify-between shrink-0">
                <div class="flex justify-between items-center border-b border-slate-100 pb-2"><div class="w-1/2 h-4 bg-slate-200 rounded"></div><div class="w-8 h-4 bg-emerald-100 rounded"></div></div>
                <div class="flex items-end h-20 gap-2 w-full mt-4">
                  <div class="w-1/5 bg-indigo-200 h-[40%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-300 h-[60%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-400 h-[30%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-500 h-[80%] rounded-t-sm"></div><div class="w-1/5 bg-indigo-600 h-[100%] rounded-t-sm"></div>
                </div>
             </div>
             <div class="w-80 h-48 bg-white rounded-xl shadow-lg border border-slate-200 p-4 shrink-0 flex gap-4">
                <div class="w-1/3 h-full rounded-full border-[12px] border-amber-400 flex items-center justify-center shrink-0"></div>
                <div class="w-2/3 flex flex-col justify-center space-y-4">
                  <div class="w-full h-8 bg-slate-100 rounded flex items-center px-2"><div class="w-2/3 h-2 bg-amber-400 rounded-full"></div></div>
                  <div class="w-full h-8 bg-slate-100 rounded flex items-center px-2"><div class="w-1/2 h-2 bg-rose-400 rounded-full"></div></div>
                  <div class="w-full h-8 bg-slate-100 rounded flex items-center px-2"><div class="w-3/4 h-2 bg-blue-400 rounded-full"></div></div>
                </div>
             </div>
             <div class="w-80 h-48 bg-slate-900 rounded-xl shadow-lg border border-slate-700 p-4 flex flex-col justify-between shrink-0">
                <div class="flex justify-between items-center border-b border-slate-700 pb-2"><div class="w-1/2 h-4 bg-slate-700 rounded"></div></div>
                <div class="flex items-center justify-center h-24 mt-4 relative">
                  <div class="absolute w-full h-[2px] bg-slate-700"></div>
                  <!-- Line chart mock  -->
                  <div class="absolute left-0 w-12 h-[2px] bg-emerald-400 rotate-12 origin-left"></div>
                  <div class="absolute left-12 top-[-2px] w-16 h-[2px] bg-emerald-400 -rotate-12 origin-left"></div>
                  <div class="absolute left-28 top-[-15px] w-16 h-[2px] bg-emerald-400 rotate-45 origin-left"></div>
                  <div class="absolute left-40 top-[20px] w-20 h-[2px] bg-emerald-400 -rotate-[30deg] origin-left"></div>
                </div>
             </div>
               <div class="w-80 h-48 bg-white rounded-xl shadow-lg border border-slate-200 p-4 grid grid-cols-2 gap-2 content-between shrink-0">
                  <div class="bg-indigo-50 rounded p-2"><div class="text-xs text-indigo-400">USERS</div><div class="text-lg font-bold">12K</div></div>
                  <div class="bg-rose-50 rounded p-2"><div class="text-xs text-rose-400">BOUNCE</div><div class="text-lg font-bold">42%</div></div>
                  <div class="bg-emerald-50 rounded p-2"><div class="text-xs text-emerald-400">CONV.</div><div class="text-lg font-bold">3.4%</div></div>
                  <div class="bg-amber-50 rounded p-2"><div class="text-xs text-amber-400">TIME</div><div class="text-lg font-bold">2m:13</div></div>
               </div>
           </div>
        </div>
      </section>

      <!-- Graphic Design Service Node -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-6 max-w-5xl">
          <div class="flex flex-col md:flex-row gap-8 items-start mb-12">
            <div class="flex-shrink-0 w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-inner">
              03
            </div>
            <div class="flex-1">
              <h3 class="text-3xl font-bold mb-4 text-slate-900">
                Graphic Design
              </h3>
              <p class="text-slate-600 text-lg leading-relaxed mb-4 max-w-3xl">
                Stunning visual communication that elevates your brand and captivates your audience. We build brands that people remember.
              </p>
              <a routerLink="/services/graphic-design" class="inline-flex items-center gap-2 text-rose-600 font-bold hover:text-rose-800 transition-colors bg-rose-50 px-4 py-2 rounded-lg mt-2">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Design Photos Marquee -->
        <div class="relative flex overflow-x-hidden pt-4 pb-12 mt-8">
           <div class="absolute z-10 w-32 h-full left-0 top-0 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
           <div class="absolute z-10 w-32 h-full right-0 top-0 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
           
           <div class="animate-marquee-slow flex shrink-0 min-w-full justify-around space-x-6 px-4 items-center">
             <!-- Mock Design 1: Logo -->
             <div class="w-72 h-72 bg-slate-900 rounded-2xl shadow-xl overflow-hidden shrink-0 flex items-center justify-center group relative cursor-pointer">
                <div class="absolute inset-0 bg-rose-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div class="text-center">
                  <div class="w-16 h-16 border-4 border-white mx-auto rounded-full mb-4 flex items-center justify-center">
                    <div class="w-8 h-8 bg-white rotate-45"></div>
                  </div>
                  <h4 class="text-white font-bold tracking-[0.2em] uppercase text-xl">Lumina</h4>
                  <p class="text-rose-300 text-xs tracking-widest mt-1">BRAND IDENTITY</p>
                </div>
             </div>
             
             <!-- Mock Design 2: Modern Marketing Material -->
             <div class="w-72 h-72 bg-emerald-50 rounded-2xl shadow-xl border border-emerald-100 overflow-hidden shrink-0 relative flex items-center justify-center">
                <div class="w-48 h-48 rounded-full bg-emerald-200 absolute -top-10 -right-10 mix-blend-multiply opacity-50"></div>
                <div class="w-40 h-40 rounded-full bg-yellow-200 absolute -bottom-8 -left-8 mix-blend-multiply opacity-50"></div>
                
                <div class="relative z-10 w-[80%] h-[80%] bg-emerald-900 shadow-2xl skew-y-3 p-4 flex flex-col justify-between">
                   <div class="w-1/2 h-4 bg-emerald-700"></div>
                   <div class="text-white font-black text-2xl leading-none">SPRING<br>COLLECTION</div>
                   <div class="w-full h-1 bg-emerald-400"></div>
                </div>
             </div>
             
             <!-- Mock Design 3: Poster Layout -->
             <div class="w-72 h-72 bg-[#f4ece4] rounded-2xl shadow-xl border border-stone-200 overflow-hidden shrink-0 flex">
                <div class="w-1/3 h-full bg-[#d65f3d] flex items-center justify-center">
                   <h2 class="text-[#f4ece4] -rotate-90 text-4xl font-black whitespace-nowrap tracking-tighter">FESTIVAL</h2>
                </div>
                <div class="w-2/3 p-6 flex flex-col justify-between">
                   <div>
                     <div class="w-full bg-black h-1 mb-2"></div>
                     <div class="w-3/4 bg-black h-1 mb-6"></div>
                   </div>
                   <div class="text-[#d65f3d] font-bold text-5xl">25</div>
                   <div class="space-y-1">
                     <div class="w-full h-2 bg-stone-300"></div>
                     <div class="w-full h-2 bg-stone-300"></div>
                     <div class="w-1/2 h-2 bg-stone-300"></div>
                   </div>
                </div>
             </div>
             
             <!-- Mock Design 4: Tech UI Graphic -->
             <div class="w-72 h-72 bg-indigo-900 rounded-2xl shadow-xl overflow-hidden shrink-0 p-6 flex flex-col items-center justify-center text-center relative pointer-events-none">
                <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div class="w-24 h-24 mb-6 rounded-3xl border-4 border-indigo-400 bg-indigo-800 shadow-[0_0_30px_rgba(129,140,248,0.5)] flex items-center justify-center relative z-10">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1h-4l-2 1v4l2 1h4l2-1V4z" /></svg>
                </div>
                <h3 class="text-white font-bold text-lg relative z-10">Iconography</h3>
             </div>
             
             <!-- Mock Design 5: Clean Typography / Modern ad -->
             <div class="w-72 h-72 bg-yellow-400 rounded-2xl shadow-xl overflow-hidden shrink-0 flex flex-col justify-center px-8 relative">
               <div class="absolute font-black text-[120px] leading-none text-yellow-500 opacity-50 -top-6 -left-2 z-0">M</div>
               <h3 class="text-black font-black text-4xl leading-none italic relative z-10 mb-2">MAKE<br>IT<br>POP.</h3>
               <div class="w-12 h-2 bg-black relative z-10"></div>
             </div>
           </div>

           <!-- Duplicate for seamless looping -->
           <div aria-hidden="true" class="animate-marquee-slow flex shrink-0 min-w-full justify-around space-x-6 px-4 items-center pl-6">
             <div class="w-72 h-72 bg-slate-900 rounded-2xl shadow-xl overflow-hidden shrink-0 flex items-center justify-center group relative cursor-pointer">
                <div class="absolute inset-0 bg-rose-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div class="text-center">
                  <div class="w-16 h-16 border-4 border-white mx-auto rounded-full mb-4 flex items-center justify-center">
                    <div class="w-8 h-8 bg-white rotate-45"></div>
                  </div>
                  <h4 class="text-white font-bold tracking-[0.2em] uppercase text-xl">Lumina</h4>
                  <p class="text-rose-300 text-xs tracking-widest mt-1">BRAND IDENTITY</p>
                </div>
             </div>
             
             <div class="w-72 h-72 bg-emerald-50 rounded-2xl shadow-xl border border-emerald-100 overflow-hidden shrink-0 relative flex items-center justify-center">
                <div class="w-48 h-48 rounded-full bg-emerald-200 absolute -top-10 -right-10 mix-blend-multiply opacity-50"></div>
                <div class="w-40 h-40 rounded-full bg-yellow-200 absolute -bottom-8 -left-8 mix-blend-multiply opacity-50"></div>
                
                <div class="relative z-10 w-[80%] h-[80%] bg-emerald-900 shadow-2xl skew-y-3 p-4 flex flex-col justify-between">
                   <div class="w-1/2 h-4 bg-emerald-700"></div>
                   <div class="text-white font-black text-2xl leading-none">SPRING<br>COLLECTION</div>
                   <div class="w-full h-1 bg-emerald-400"></div>
                </div>
             </div>
             
             <div class="w-72 h-72 bg-[#f4ece4] rounded-2xl shadow-xl border border-stone-200 overflow-hidden shrink-0 flex">
                <div class="w-1/3 h-full bg-[#d65f3d] flex items-center justify-center">
                   <h2 class="text-[#f4ece4] -rotate-90 text-4xl font-black whitespace-nowrap tracking-tighter">FESTIVAL</h2>
                </div>
                <div class="w-2/3 p-6 flex flex-col justify-between">
                   <div>
                     <div class="w-full bg-black h-1 mb-2"></div>
                     <div class="w-3/4 bg-black h-1 mb-6"></div>
                   </div>
                   <div class="text-[#d65f3d] font-bold text-5xl">25</div>
                   <div class="space-y-1">
                     <div class="w-full h-2 bg-stone-300"></div>
                     <div class="w-full h-2 bg-stone-300"></div>
                     <div class="w-1/2 h-2 bg-stone-300"></div>
                   </div>
                </div>
             </div>
             
             <div class="w-72 h-72 bg-indigo-900 rounded-2xl shadow-xl overflow-hidden shrink-0 p-6 flex flex-col items-center justify-center text-center relative pointer-events-none">
                <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div class="w-24 h-24 mb-6 rounded-3xl border-4 border-indigo-400 bg-indigo-800 shadow-[0_0_30px_rgba(129,140,248,0.5)] flex items-center justify-center relative z-10">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1h-4l-2 1v4l2 1h4l2-1V4z" /></svg>
                </div>
                <h3 class="text-white font-bold text-lg relative z-10">Iconography</h3>
             </div>
             
             <div class="w-72 h-72 bg-yellow-400 rounded-2xl shadow-xl overflow-hidden shrink-0 flex flex-col justify-center px-8 relative">
               <div class="absolute font-black text-[120px] leading-none text-yellow-500 opacity-50 -top-6 -left-2 z-0">M</div>
               <h3 class="text-black font-black text-4xl leading-none italic relative z-10 mb-2">MAKE<br>IT<br>POP.</h3>
               <div class="w-12 h-2 bg-black relative z-10"></div>
             </div>
           </div>
        </div>
      </section>

      <!-- Call to action -->
      <section class="mt-20">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold mb-8 text-slate-900">
            Ready to start your next project?
          </h2>
          <a
            routerLink="/contact"
            class="inline-block bg-blue-600 text-white px-10 py-5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 text-lg"
            >Contact Us Today</a
          >
        </div>
      </section>
    </div>
  `,
  styles: [`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-marquee {
      animation: marquee 20s linear infinite;
    }
    
    @keyframes marquee-slow {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
    .animate-marquee-slow {
      animation: marquee-slow 40s linear infinite;
    }
    
    .animate-marquee:hover, .animate-marquee-slow:hover {
       animation-play-state: paused;
    }
  `],
})
export class ServicesComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    this.seo.updateMetaTags(
      'Our Services',
      'Discover Entropy Infotech\'s core competencies: Web Development, Analytics Dashboards, and Graphic Design tailored for your business.'
    );
  }
}
