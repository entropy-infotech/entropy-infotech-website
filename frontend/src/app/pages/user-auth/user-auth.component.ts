import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { StudentAuthService } from '../../services/student-auth.service';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <!-- ... (Template stays same, just uses studentAuthService logic) ... -->
    <section class="min-h-screen flex items-center justify-center bg-[#0a0c10] py-20 px-6 relative overflow-hidden">
      <!-- Background Accents -->
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>

      <div class="max-w-md w-full relative z-10">
        <!-- Logo/Header -->
        <div class="text-center mb-10">
          <div class="w-16 h-16 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-purple-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>
          </div>
          <h2 class="text-3xl font-extrabold text-white tracking-tight">
            {{ isLogin ? 'Welcome Back' : 'Join the Playground' }}
          </h2>
          <p class="text-gray-400 mt-2">
            {{ isLogin ? 'Sign in to continue your journey' : 'Create an account to start earning points' }}
          </p>
        </div>

        <!-- Critical Warning Box -->
        <div class="bg-orange-500/10 border border-orange-500/20 p-4 rounded-2xl mb-8 flex gap-4 items-start animate-pulse">
          <div class="bg-orange-500/20 p-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
          </div>
          <div class="text-xs">
            <p class="font-bold text-orange-500 uppercase tracking-widest mb-1">Important Note</p>
            <p class="text-gray-300 leading-relaxed">
              Remember your username and password! We don't use email verification. If you forget your credentials, <strong>you will lose all your points and progress</strong> permanently.
            </p>
          </div>
        </div>

        <!-- Auth Card -->
        <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10">
          <form [formGroup]="authForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Username</label>
              <input
                type="text"
                formControlName="username"
                class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-medium text-white"
                placeholder="CodeWarrior_26"
              />
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Password</label>
              <input
                type="password"
                formControlName="password"
                class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all font-medium text-white"
                placeholder="••••••••"
              />
            </div>

            <div *ngIf="error" class="bg-red-500/10 text-red-400 p-4 rounded-2xl text-sm font-medium border border-red-500/20">
              {{ error }}
            </div>

            <button
              type="submit"
              [disabled]="authForm.invalid || loading"
              class="w-full bg-purple-600 hover:bg-purple-500 text-white py-5 rounded-2xl font-bold transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 shadow-lg shadow-purple-600/30"
            >
              {{ loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account') }}
            </button>

            <div class="text-center pt-4">
              <button 
                type="button" 
                (click)="toggleMode()" 
                class="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {{ isLogin ? "Don't have an account? Join Now" : "Already a member? Sign In" }}
              </button>
            </div>
          </form>
        </div>

        <div class="text-center mt-12">
          <a routerLink="/student-playground" class="text-sm font-bold text-gray-500 hover:text-purple-400 transition-colors flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Playground
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    input::placeholder { color: rgba(255, 255, 255, 0.2); }
  `]
})
export class UserAuthComponent implements OnInit {
  private fb = inject(FormBuilder);
  private studentAuthService = inject(StudentAuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isLogin = true;
  loading = false;
  error = '';

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'register') {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    });
  }

  authForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.error = '';
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.loading = true;
      this.error = '';

      const { username, password } = this.authForm.value;
      
      if (this.isLogin) {
        this.studentAuthService.login({ username: username!, password: password! }).subscribe({
          next: () => {
            this.handleSuccess();
          },
          error: (err: any) => {
            this.loading = false;
            this.error = err.error?.message || 'Login failed. Please check your credentials.';
          }
        });
      } else {
        this.studentAuthService.register({ username, password }).subscribe({
          next: () => {
            this.studentAuthService.login({ username: username!, password: password! }).subscribe({
              next: () => this.handleSuccess(),
              error: () => {
                this.isLogin = true;
                this.loading = false;
                this.error = 'Account created! Please sign in.';
              }
            });
          },
          error: (err: any) => {
            this.loading = false;
            this.error = err.error?.message || 'Registration failed. Try a different username.';
          }
        });
      }
    }
  }

  private handleSuccess() {
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/student-playground';
    this.router.navigate([returnUrl]);
  }
}
