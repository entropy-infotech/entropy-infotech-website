import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactService, Message } from '../../services/contact.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-manage-messages',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-950 text-white flex">
      <!-- Sidebar Copy (Could be a shared component) -->
      <aside class="w-64 bg-slate-900 border-r border-slate-800 shrink-0">
        <div class="p-6">
          <h1 class="text-xl font-bold text-blue-500">Admin Console</h1>
        </div>
        <nav class="mt-6">
          <a routerLink="/admin/dashboard" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
            <span class="ml-3">Overview</span>
          </a>
          <a routerLink="/admin/manage-messages" class="flex items-center px-6 py-3 bg-blue-600/10 text-blue-400 border-r-2 border-blue-500">
            <span class="ml-3">Queries</span>
          </a>
          <a routerLink="/admin/manage-clients" class="flex items-center px-6 py-3 text-slate-400 hover:bg-slate-800 transition-colors">
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
        <header class="mb-8">
          <h2 class="text-3xl font-bold">Client Queries</h2>
          <p class="text-slate-400 mt-1">Manage incoming inquiries and convert them to clients</p>
        </header>

        <div *ngIf="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>

        <div *ngIf="!loading && messages.length === 0" class="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800">
          <p class="text-slate-500">No active queries found.</p>
        </div>

        <div *ngIf="!loading && messages.length > 0" class="space-y-4">
          <div *ngFor="let msg of messages" class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">{{ msg.name }}</h3>
                <p class="text-blue-400 text-sm">{{ msg.email }}</p>
              </div>
              <span class="text-xs text-slate-500">{{ msg.createdAt | date:'short' }}</span>
            </div>
            
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Subject: {{ msg.subject }}</h4>
              <p class="text-slate-300 leading-relaxed">{{ msg.message }}</p>
            </div>

            <div class="flex gap-4">
              <button (click)="onMakeClient(msg)" 
                class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
                Make Client
              </button>
              <button (click)="onReject(msg._id)" 
                class="bg-slate-800 hover:bg-red-900/50 hover:text-red-500 text-slate-400 font-bold py-2 px-6 rounded-lg transition-all">
                Reject
              </button>
            </div>
          </div>
        </div>

        <!-- Conversion Success Modal -->
        <div *ngIf="successData" class="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div class="bg-slate-900 border border-blue-500/30 p-8 rounded-2xl max-w-md w-full text-center">
            <div class="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Client Created!</h3>
            <p class="text-slate-400 mb-6">User has been added to the system.</p>
            
            <div class="bg-slate-800 p-4 rounded-xl text-left mb-6">
              <p class="text-xs text-slate-500 uppercase mb-1">Username / Email</p>
              <p class="font-mono text-white mb-3">{{ successData.username }}</p>
              <p class="text-xs text-slate-500 uppercase mb-1">Temporary Password</p>
              <p class="font-mono text-blue-400 font-bold text-lg">{{ successData.tempPassword }}</p>
            </div>

            <button (click)="successData = null" class="w-full bg-blue-600 py-3 rounded-lg font-bold">Done</button>
          </div>
        </div>
      </main>
    </div>
  `,
})
export class ManageMessagesComponent implements OnInit {
  private contactService = inject(ContactService);
  private authService = inject(AuthService);
  
  messages: Message[] = [];
  loading = true;
  successData: any = null;

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    this.loading = true;
    this.contactService.getMessages().subscribe({
      next: (res) => {
        this.messages = res;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onReject(id: string) {
    if (confirm('Are you sure you want to reject this query?')) {
      this.contactService.deleteMessage(id).subscribe(() => {
        this.messages = this.messages.filter(m => m._id !== id);
      });
    }
  }

  onMakeClient(msg: Message) {
    this.authService.convertQueryToClient(msg._id).subscribe({
      next: (res) => {
        this.successData = res;
        this.messages = this.messages.filter(m => m._id !== msg._id);
      },
      error: (err) => alert(err.error?.message || 'Failed to convert')
    });
  }
}
