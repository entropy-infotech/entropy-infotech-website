import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-manage-applications',
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
          <a routerLink="/admin/manage-clients" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
            <span class="ml-3">Clients</span>
          </a>
          <a routerLink="/admin/manage-blog" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
            <span class="ml-3">Blogs</span>
          </a>
          <a routerLink="/admin/manage-applications" class="flex items-center px-6 py-3 bg-blue-600/10 text-blue-400 border-r-2 border-blue-500">
            <span class="ml-3">Applications</span>
          </a>
        </nav>
      </aside>

      <main class="flex-1 p-8">
        <header class="mb-8">
          <h2 class="text-3xl font-bold">Internship Applications</h2>
          <p class="text-slate-400 mt-1">Review and manage candidate applications</p>
        </header>

        <div *ngIf="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>

        <div *ngIf="!loading && apps.length === 0" class="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800">
          <p class="text-slate-500">No applications received yet.</p>
        </div>

        <div *ngIf="!loading && apps.length > 0" class="space-y-4">
          <div *ngFor="let app of apps" class="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">{{ app.fullName }}</h3>
                <p class="text-blue-400 text-sm">{{ app.email }} • {{ app.phone }}</p>
                <p class="text-slate-400 text-xs mt-1">{{ app.role }}</p>
              </div>
              <div class="flex flex-col items-end gap-2">
                <select [value]="app.status" (change)="updateStatus(app._id, $event)" 
                  class="bg-slate-800 border-slate-700 text-xs rounded px-2 py-1 outline-none text-white focus:ring-1 focus:ring-blue-500">
                  <option value="pending">Pending</option>
                  <option value="interview">Interview</option>
                  <option value="hired">Hired</option>
                  <option value="rejected">Rejected</option>
                </select>
                <span class="text-[10px] text-slate-500">{{ app.createdAt | date:'short' }}</span>
              </div>
            </div>
            
            <div class="mb-4">
              <p class="text-slate-400 text-sm italic">"{{ app.hiringMessage | slice:0:150 }}{{ app.hiringMessage?.length > 150 ? '...' : '' }}"</p>
            </div>

            <div class="flex gap-4">
              <a [href]="'http://localhost:5000/' + app.resumeFile" target="_blank"
                class="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-center text-sm font-semibold transition-colors">
                View Resume
              </a>
              <button (click)="onDelete(app._id)" 
                class="bg-slate-800 hover:bg-red-900/40 text-red-500/80 px-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
})
export class ManageApplicationsComponent implements OnInit {
  private http = inject(HttpClient);
  
  apps: any[] = [];
  loading = true;
  private apiUrl = `${environment.apiUrl}/careers/admin/applications`;

  ngOnInit() {
    this.loadApps();
  }

  loadApps() {
    this.loading = true;
    this.http.get<any[]>(this.apiUrl, { withCredentials: true }).subscribe({
      next: (res) => {
        this.apps = res;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  updateStatus(id: string, event: any) {
    const status = event.target.value;
    this.http.patch(`${this.apiUrl}/${id}`, { status }, { withCredentials: true }).subscribe({
      next: () => alert('Application status updated successfully'),
      error: (err) => alert('Failed to update status: ' + (err.error?.message || 'Unknown error'))
    });
  }

  onDelete(id: string) {
    if (confirm('Delete this application?')) {
      this.http.delete(`${this.apiUrl}/${id}`, { withCredentials: true }).subscribe(() => {
        this.apps = this.apps.filter(a => a._id !== id);
      });
    }
  }
}
