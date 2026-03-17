import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-slate-50 p-8 md:p-12">
      <header class="flex justify-between items-center mb-12">
        <div>
          <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Portal
          </h1>
          <p class="text-slate-500 font-medium">
            Welcome, {{ currentUser?.username }}
          </p>
        </div>
        <button
          (click)="logout()"
          class="bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-xl font-bold transition-all border border-slate-200"
        >
          Logout
        </button>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div
            class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 font-black text-xl"
          >
            1
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-4">
            Project Overview
          </h3>
          <p class="text-slate-500 mb-6">
            View the current status and milestones of your active projects with
            Entropy Infotech.
          </p>
          <span
            class="text-blue-600 font-bold text-sm cursor-pointer hover:underline"
            >View Projects &rarr;</span
          >
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div
            class="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 font-black text-xl"
          >
            2
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-4">
            Invoices & Billing
          </h3>
          <p class="text-slate-500 mb-6">
            Manage your payments, view history, and download invoices for your
            records.
          </p>
          <span
            class="text-emerald-600 font-bold text-sm cursor-pointer hover:underline"
            >Billing Center &rarr;</span
          >
        </div>

        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div
            class="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 font-black text-xl"
          >
            3
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-4">Support & Comms</h3>
          <p class="text-slate-500 mb-6">
            Have questions? Reach out to your dedicated account manager directly
            from here.
          </p>
          <span
            class="text-purple-600 font-bold text-sm cursor-pointer hover:underline"
            >Get Support &rarr;</span
          >
        </div>
      </div>

      <div
        class="mt-12 bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative"
      >
        <div class="relative z-10">
          <h2 class="text-3xl font-black mb-4">Ready for the next phase?</h2>
          <p class="text-slate-400 max-w-xl mb-8">
            We've just updated our service catalog with new AI-driven solutions
            tailored for your business needs. Check them out!
          </p>
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20"
          >
            Explore Services
          </button>
        </div>
        <!-- Decorative Circle -->
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"
        ></div>
      </div>
    </div>
  `,
  styles: [],
})
export class ClientDashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  currentUser = this.authService.currentUserValue;

  logout() {
    this.authService.logout();
  }
}
