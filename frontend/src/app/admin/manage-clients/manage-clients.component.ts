import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-manage-clients',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-white flex">
      <aside class="w-64 bg-slate-900 border-r border-slate-800 shrink-0">
        <div class="p-6">
          <h1 class="text-xl font-bold text-blue-500">Admin Console</h1>
        </div>
        <nav class="mt-6">
          <a routerLink="/admin/dashboard" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
            <span class="ml-3">Overview</span>
          </a>
          <a routerLink="/admin/manage-messages" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
            <span class="ml-3">Queries</span>
          </a>
          <a routerLink="/admin/manage-clients" class="flex items-center px-6 py-3 bg-blue-600/10 text-blue-400 border-r-2 border-blue-500">
            <span class="ml-3">Clients</span>
          </a>
          <a routerLink="/admin/manage-blog" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
            <span class="ml-3">Blogs</span>
          </a>
          <a routerLink="/admin/manage-applications" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
            <span class="ml-3">Applications</span>
          </a>
        </nav>
      </aside>

      <main class="flex-1 p-8">
        <header class="mb-8 flex justify-between items-center">
          <div>
            <h2 class="text-3xl font-bold">Manage Clients</h2>
            <p class="text-slate-400 mt-1">View and manage internal client accounts</p>
          </div>
        </header>

        <div *ngIf="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>

        <div *ngIf="!loading && clients.length === 0" class="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800">
          <p class="text-slate-500">No client accounts found.</p>
        </div>

        <div *ngIf="!loading && clients.length > 0" class="overflow-x-auto bg-slate-900 rounded-xl border border-slate-800">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b border-slate-800">
                <th class="px-6 py-4 text-sm font-semibold text-slate-400 uppercase">Username</th>
                <th class="px-6 py-4 text-sm font-semibold text-slate-400 uppercase">Role</th>
                <th class="px-6 py-4 text-sm font-semibold text-slate-400 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let client of clients" class="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                <td class="px-6 py-4 text-white font-medium">{{ client.username }}</td>
                <td class="px-6 py-4">
                  <span class="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">Client</span>
                </td>
                <td class="px-6 py-4 text-right">
                  <button (click)="onDelete(client._id)" class="text-red-500 hover:text-red-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  `,
})
export class ManageClientsComponent implements OnInit {
  private authService = inject(AuthService);
  
  clients: any[] = [];
  loading = true;

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.loading = true;
    this.authService.getClients().subscribe({
      next: (res) => {
        this.clients = res;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this client?')) {
      this.authService.deleteClient(id).subscribe(() => {
        this.clients = this.clients.filter(c => c._id !== id);
      });
    }
  }
}
