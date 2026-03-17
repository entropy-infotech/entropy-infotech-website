import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div class="max-w-md w-full space-y-8 p-8 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white tracking-tight">Portal Access</h2>
          <p class="mt-2 text-slate-400">Secure access to Entropy Infotech</p>
        </div>

        <!-- Login Form -->
        <form *ngIf="!setup2FA && !require2FA" class="mt-8 space-y-6" (ngSubmit)="onLogin()">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-300">Username</label>
              <input type="text" [(ngModel)]="username" name="username" required
                class="mt-1 block w-full bg-slate-800 border-slate-700 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-300">Password</label>
              <input type="password" [(ngModel)]="password" name="password" required
                class="mt-1 block w-full bg-slate-800 border-slate-700 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
            </div>
          </div>

          <button type="submit" [disabled]="loading"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2">
            <span *ngIf="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            Sign In
          </button>
          
          <p *ngIf="error" class="text-red-500 text-sm text-center font-medium">{{ error }}</p>
        </form>

        <!-- 2FA Setup (First Time) -->
        <div *ngIf="setup2FA" class="mt-8 space-y-6 text-center">
          <p class="text-white font-medium">Scan this QR code with your authenticator app</p>
          <div class="bg-white p-4 rounded-xl inline-block mx-auto shadow-lg">
            <img [src]="qrCodeUrl" alt="QR Code" class="w-48 h-48">
          </div>
          <p class="text-slate-400 text-sm">Enter the 6-digit code to verify and enable 2FA</p>
          
          <div class="flex flex-col gap-4">
            <input type="text" [(ngModel)]="token" placeholder="000000" maxlength="6"
              class="block w-full text-center tracking-[0.5em] text-2xl font-bold bg-slate-800 border-slate-700 rounded-lg text-white py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            
            <button (click)="onVerify2FA()" [disabled]="loading"
              class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all">
              Verify & Enter Dashboard
            </button>
          </div>
          <p *ngIf="error" class="text-red-500 text-sm">{{ error }}</p>
        </div>

        <!-- 2FA Required (Already Enabled) -->
        <div *ngIf="require2FA" class="mt-8 space-y-6 text-center">
          <div class="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white">Two-Factor Auth</h3>
          <p class="text-slate-400">Enter the code from your app</p>
          
          <div class="flex flex-col gap-4">
            <input type="text" [(ngModel)]="token" placeholder="000000" maxlength="6"
              class="block w-full text-center tracking-[0.5em] text-2xl font-bold bg-slate-800 border-slate-700 rounded-lg text-white py-3 focus:ring-2 focus:ring-blue-500 outline-none">
            
            <button (click)="onLoginWith2FA()" [disabled]="loading"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all">
              Verify OTP
            </button>
          </div>
          <p *ngIf="error" class="text-red-500 text-sm">{{ error }}</p>
        </div>
      </div>
    </div>
  `,
})
export class AdminLoginComponent {
  username = '';
  password = '';
  token = '';
  loading = false;
  error = '';
  setup2FA = false;
  require2FA = false;
  qrCodeUrl = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  onLogin() {
    this.loading = true;
    this.error = '';
    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res) => {
        if (res.setup2FA) {
          this.setup2FA = true;
          this.fetchQRCode();
        } else if (res.require2FA) {
          this.require2FA = true;
        } else if (res.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else if (res.role === 'client') {
          this.router.navigate(['/client/dashboard']);
        } else {
          this.error = 'Invalid role access';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.message || 'Login failed';
        this.loading = false;
      },
    });
  }

  fetchQRCode() {
    this.authService.generate2FA().subscribe({
      next: (res) => {
        this.qrCodeUrl = res.qrImageUrl;
      },
      error: (err) => {
        this.error = err.error?.message || err.error?.details || 'Failed to load QR code';
        console.error('QR Fetch Error:', err);
      },
    });
  }

  onVerify2FA() {
    this.loading = true;
    this.error = '';
    this.authService.verify2FA(this.token).subscribe({
      next: () => {
        // After enabling, log in again or just proceed if session is set
        // Usually, verify-2fa on backend should update the session
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.error = 'Invalid code';
        this.loading = false;
      },
    });
  }

  onLoginWith2FA() {
    this.loading = true;
    this.error = '';
    this.authService.login({ 
      username: this.username, 
      password: this.password, 
      token: this.token 
    }).subscribe({
      next: (res) => {
        this.router.navigate(['/admin/dashboard']);
      },
      error: (err) => {
        this.error = 'Invalid token';
        this.loading = false;
      },
    });
  }
}
