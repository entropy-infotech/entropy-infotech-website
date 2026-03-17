import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-white">
      <div class="flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-slate-900 min-h-screen border-r border-slate-800">
          <div class="p-6">
            <h1 class="text-xl font-bold text-blue-500">Admin Console</h1>
          </div>
          <nav class="mt-6">
            <a routerLink="/admin/dashboard" class="flex items-center px-6 py-3 bg-blue-600/10 text-blue-400 border-r-2 border-blue-500">
              <span class="ml-3">Overview</span>
            </a>
            <a routerLink="/admin/manage-messages" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <span class="ml-3">Queries</span>
            </a>
            <a routerLink="/admin/manage-clients" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <span class="ml-3">Clients</span>
            </a>
            <a routerLink="/admin/manage-blog" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <span class="ml-3">Blogs</span>
            </a>
            <a routerLink="/admin/manage-applications" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <span class="ml-3">Applications</span>
            </a>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 p-8">
          <header class="flex justify-between items-center mb-12">
            <div>
              <h2 class="text-3xl font-bold">Welcome, {{ authService.currentUserValue?.username }}</h2>
              <p class="text-slate-400 mt-1">Manage entropy infotech systems</p>
            </div>
          </header>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div class="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <h3 class="text-slate-400 text-sm font-medium">Clients</h3>
              <p class="text-3xl font-bold mt-2">{{ stats.clients }}</p>
            </div>
            <div class="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <h3 class="text-slate-400 text-sm font-medium">Blogs</h3>
              <p class="text-3xl font-bold mt-2">{{ stats.blogs }}</p>
            </div>
            <div class="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <h3 class="text-slate-400 text-sm font-medium">Queries</h3>
              <p class="text-3xl font-bold mt-2">{{ stats.messages }}</p>
            </div>
            <div class="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <h3 class="text-slate-400 text-sm font-medium">Job Apps</h3>
              <p class="text-3xl font-bold mt-2">{{ stats.applications }}</p>
            </div>
          </div>

          <!-- Fast Actions -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl shadow-blue-900/10">
              <h3 class="text-xl font-bold mb-2 text-white">New Blog Post</h3>
              <p class="text-blue-100 mb-6 text-sm">Expand your reach with fresh content.</p>
              <a routerLink="/admin/create-blog" class="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors">Create Now</a>
            </div>
            <div class="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 class="text-xl font-bold mb-2">Security Note</h3>
              <p class="text-slate-400 mb-6 text-sm">Ensure your 2FA is active and your session is secure.</p>
              <div class="flex items-center text-green-500 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Protected by 2FA
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  authService = inject(AuthService);
  stats = { clients: 0, blogs: 0, messages: 0, applications: 0 };

  ngOnInit() {
    this.authService.getStats().subscribe({
      next: (res) => (this.stats = res),
      error: (err) => console.error('Failed to fetch stats', err),
    });
  }
}
