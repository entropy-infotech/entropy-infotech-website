import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-slate-50 min-h-screen">
      <!-- High-End Hero Section -->
      <section
        class="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
          <img
            src="assets/images/carrer.jpg"
            alt="Careers at Entropy Infotech"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <!-- Dark Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10 z-10"
        ></div>

        <!-- Content -->
        <div
          class="relative z-20 container mx-auto px-6 text-center mt-12 transition-all duration-1000 animate-fade-in-up"
        >
          <div
            class="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-6 border border-white/20"
          >
            <span
              class="text-blue-200 font-semibold tracking-widest text-xs md:text-sm uppercase"
              >Join Our Team</span
            >
          </div>
          <h1
            class="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
          >
            Careers
          </h1>
          <p
            class="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md"
          >
            Build the future of digital solutions. We are always looking for
            passionate people to join our mission.
          </p>
        </div>
      </section>

      <!-- Internship Programs Section -->
      <section class="py-24 bg-white">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-black text-slate-900 tracking-tight mb-4">
              Internship Programs
            </h2>
            <p class="text-slate-500 font-medium max-w-2xl mx-auto">
              Gain real-world experience and build your career with our
              structured internship opportunities.
            </p>
          </div>

          <div class="max-w-4xl mx-auto space-y-12">
            <!-- Frontend Intern Card -->
            <div
              class="bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div class="p-8 md:p-12">
                <div
                  class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
                >
                  <div class="flex-grow">
                    <h3 class="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                      Frontend Developer Intern
                      <span class="text-blue-600 font-medium text-lg ml-2"
                        >(Remote)</span
                      >
                    </h3>
                    <p class="text-slate-600 leading-relaxed font-medium">
                      Join our team and gain real-world experience by working on
                      live web projects. Ideal for students or recent graduates
                      looking to build a strong portfolio.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-blue-500/20"
                      >Active Hiring</span
                    >
                  </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Role</p>
                    <p class="font-bold text-slate-900 text-sm">Frontend Intern</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                    <p class="font-bold text-slate-900 text-sm">3 Months</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</p>
                    <p class="font-bold text-slate-900 text-sm">Remote</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Eligibility</p>
                    <p class="font-bold text-slate-900 text-sm">Final Year Students</p>
                  </div>
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                  <a
                    routerLink="/careers/internships/frontend-developer"
                    class="flex-grow inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10 italic"
                  >
                    View Program Details & Responsibilities →
                  </a>
                  <a
                    routerLink="/careers/apply"
                    [queryParams]="{role: 'Frontend Developer Intern'}"
                    class="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-50"
                  >
                    Quick Apply
                  </a>
                </div>
              </div>
            </div>

            <!-- UI/UX Intern Card -->
            <div
              class="bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div class="p-8 md:p-12">
                <div
                  class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
                >
                  <div class="flex-grow">
                    <h3 class="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                      UI/UX Designer Intern
                      <span class="text-pink-600 font-medium text-lg ml-2"
                        >(Remote)</span
                      >
                    </h3>
                    <p class="text-slate-600 leading-relaxed font-medium">
                      Help design modern, user-friendly digital experiences. Ideal for students or recent graduates looking to build a professional design portfolio.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-pink-500/20"
                      >Creative Hiring</span
                    >
                  </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Role</p>
                    <p class="font-bold text-slate-900 text-sm">UI/UX Intern</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                    <p class="font-bold text-slate-900 text-sm">3 Months</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</p>
                    <p class="font-bold text-slate-900 text-sm">Remote</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Eligibility</p>
                    <p class="font-bold text-slate-900 text-sm">Open to All IT</p>
                  </div>
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                  <a
                    routerLink="/careers/internships/ui-ux-designer"
                    class="flex-grow inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10 italic"
                  >
                    View Design Program Details →
                  </a>
                  <a
                    routerLink="/careers/apply"
                    [queryParams]="{role: 'UI/UX Designer Intern'}"
                    class="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-50"
                  >
                    Quick Apply
                  </a>
                </div>
              </div>
            </div>

            <!-- Backend Intern Card -->
            <div
              class="bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div class="p-8 md:p-12">
                <div
                  class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
                >
                  <div class="flex-grow">
                    <h3 class="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                      Backend Developer Intern
                      <span class="text-indigo-600 font-medium text-lg ml-2"
                        >(Remote)</span
                      >
                    </h3>
                    <p class="text-slate-600 leading-relaxed font-medium">
                      Build robust server-side systems and work with modern databases. Ideal for students looking to strengthen their backend development skills.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-indigo-500/20"
                      >Infrastructure Hiring</span
                    >
                  </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Role</p>
                    <p class="font-bold text-slate-900 text-sm">Backend Intern</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                    <p class="font-bold text-slate-900 text-sm">3 Months</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</p>
                    <p class="font-bold text-slate-900 text-sm">Remote</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Eligibility</p>
                    <p class="font-bold text-slate-900 text-sm">Final Year IT</p>
                  </div>
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                  <a
                    routerLink="/careers/internships/backend-developer"
                    class="flex-grow inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10 italic"
                  >
                    View Backend Program Details →
                  </a>
                  <a
                    routerLink="/careers/apply"
                    [queryParams]="{role: 'Backend Developer Intern'}"
                    class="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-50"
                  >
                    Quick Apply
                  </a>
                </div>
              </div>
            </div>

            <!-- Python Intern Card -->
            <div
              class="bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div class="p-8 md:p-12">
                <div
                  class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
                >
                  <div class="flex-grow">
                    <h3 class="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                      Python Developer Intern
                      <span class="text-yellow-600 font-medium text-lg ml-2"
                        >(Remote)</span
                      >
                    </h3>
                    <p class="text-slate-600 leading-relaxed font-medium">
                      Work on real-world projects such as analytics dashboards, data processing tools, and backend systems. Ideal for students looking to gain practical Python experience.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-yellow-500/20"
                      >Data & AI Hiring</span
                    >
                  </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Role</p>
                    <p class="font-bold text-slate-900 text-sm">Python Intern</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                    <p class="font-bold text-slate-900 text-sm">3 Months</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</p>
                    <p class="font-bold text-slate-900 text-sm">Remote</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Focus</p>
                    <p class="font-bold text-slate-900 text-sm">Data & Analytics</p>
                  </div>
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                  <a
                    routerLink="/careers/internships/python-developer"
                    class="flex-grow inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10 italic"
                  >
                    View Python Program Details →
                  </a>
                  <a
                    routerLink="/careers/apply"
                    [queryParams]="{role: 'Python Developer Intern'}"
                    class="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-50"
                  >
                    Quick Apply
                  </a>
                </div>
              </div>
            </div>

            <!-- SEO Intern Card -->
            <div
              class="bg-slate-50 border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div class="p-8 md:p-12">
                <div
                  class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10"
                >
                  <div class="flex-grow">
                    <h3 class="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                      SEO Intern
                      <span class="text-teal-600 font-medium text-lg ml-2"
                        >(Remote)</span
                      >
                    </h3>
                    <p class="text-slate-600 leading-relaxed font-medium">
                      Help improve website visibility and search engine rankings. Ideal for students looking to learn practical Search Engine Optimization on real digital projects.
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <span
                      class="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-teal-500/20"
                      >Growth Hiring</span
                    >
                  </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Role</p>
                    <p class="font-bold text-slate-900 text-sm">SEO Intern</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</p>
                    <p class="font-bold text-slate-900 text-sm">3 Months</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</p>
                    <p class="font-bold text-slate-900 text-sm">Remote</p>
                  </div>
                  <div class="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                    <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Focus</p>
                    <p class="font-bold text-slate-900 text-sm">Digital Growth</p>
                  </div>
                </div>

                <div class="flex flex-col md:flex-row gap-4">
                  <a
                    routerLink="/careers/internships/seo-specialist"
                    class="flex-grow inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-900/10 italic"
                  >
                    View SEO Program Details →
                  </a>
                  <a
                    routerLink="/careers/apply"
                    [queryParams]="{role: 'SEO Intern'}"
                    class="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-50"
                  >
                    Quick Apply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Full-time Positions Placeholder -->
      <section class="py-24 bg-slate-50">
        <div class="container mx-auto px-6 text-center max-w-4xl">
          <div
            class="bg-white p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <div
              class="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">
              No Open Positions Currently
            </h2>
            <p class="text-slate-500 text-lg mb-8">
              While we are not actively hiring for specific roles at this
              moment, our team is constantly growing. We'd still love to hear
              from talented individuals.
            </p>
            <a
              routerLink="/careers/apply"
              class="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Send Us Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class CareersComponent {}
