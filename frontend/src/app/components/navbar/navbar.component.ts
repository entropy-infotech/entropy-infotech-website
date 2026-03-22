import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StudentAuthService } from '../../services/student-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav
      class="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800"
    >
      <div
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <a
          routerLink="/"
          class="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors"
        >
          Entropy <span class="text-blue-500">Infotech</span>
        </a>

        <div class="flex items-center gap-4">
          <div class="hidden md:flex space-x-8 items-center mr-4">
            <a
              routerLink="/services"
              routerLinkActive="text-blue-500"
              class="hover:text-blue-400 font-medium tracking-wide transition-colors"
              >Services</a
            >
            <a
              routerLink="/student-playground"
              routerLinkActive="text-blue-500"
              class="hover:text-blue-400 font-medium tracking-wide transition-colors"
              >Student Playground</a
            >
            <a
              routerLink="/careers"
              routerLinkActive="text-blue-500"
              class="hover:text-blue-400 font-medium tracking-wide transition-colors"
              >Careers</a
            >
            <a
              routerLink="/contact"
              routerLinkActive="text-blue-500"
              class="hover:text-blue-400 font-medium tracking-wide transition-colors"
              >Contact Us</a
            >
          </div>

          <div class="pl-4 border-l border-slate-700 flex items-center">
            <!-- Profile Icon & Dropdown -->
            <div class="relative group">
              <button
                class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 transition-all border border-slate-700 group-hover:border-blue-500/50 overflow-hidden shadow-inner"
              >
                <div
                  *ngIf="
                    authService.isLoggedIn() || studentAuthService.isLoggedIn();
                    else guestIcon
                  "
                  class="w-full h-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm uppercase"
                >
                  {{
                    (
                      authService.currentUserValue?.username ||
                      studentAuthService.currentStudentValue?.username
                    )?.charAt(0)
                  }}
                </div>
                <ng-template #guestIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </ng-template>
              </button>

              <!-- Dropdown Menu -->
              <div
                class="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 z-[60] border border-slate-100"
              >
                <!-- Guest View -->
                <ng-container
                  *ngIf="
                    !authService.isLoggedIn() &&
                    !studentAuthService.isLoggedIn()
                  "
                >
                  <div class="px-5 py-3 border-b border-slate-50 mb-2 bg-slate-50/50">
                    <p class="text-sm font-bold text-slate-900">Welcome Back!</p>
                    <p class="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-0.5">
                      Please sign in
                    </p>
                  </div>
                  
                  <a routerLink="/login" class="flex items-center gap-3 px-5 py-2.5 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-600 transition-colors font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                    Student Login
                  </a>

                  <a routerLink="/admin-login" class="flex items-center gap-3 px-5 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    Client Login
                  </a>
                  
                  <a routerLink="/admin-login" class="flex items-center gap-3 px-5 py-2.5 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    Admin Login
                  </a>

                  <div class="border-t border-slate-50 mt-2 pt-2">
                    <div class="px-5 py-2 mb-1">
                      <p class="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Visiting First Time?</p>
                      <a routerLink="/contact" class="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors">
                        Send a Query
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                      </a>
                    </div>
                  </div>
                </ng-container>

                <!-- Admin/Client View -->
                <ng-container *ngIf="authService.isLoggedIn()">
                  <div
                    class="px-5 py-3 border-b border-slate-50 mb-2 bg-slate-50/50"
                  >
                    <p
                      class="text-xs font-bold text-blue-600 uppercase tracking-widest mb-0.5"
                    >
                      Staff Portal
                    </p>
                    <p class="text-sm font-bold text-slate-900 truncate">
                      {{ authService.currentUserValue?.username }}
                    </p>
                  </div>
                  <a
                    [routerLink]="authService.currentUserValue?.role === 'admin' ? '/admin/dashboard' : '/client/dashboard'"
                    class="flex items-center gap-3 px-5 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                  >
                    Dashboard
                  </a>
                  <button
                    (click)="logout()"
                    class="w-full text-left flex items-center gap-3 px-5 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-semibold mt-2 border-t border-slate-50 pt-3"
                  >
                    Logout
                  </button>
                </ng-container>

                <!-- Student View -->
                <ng-container *ngIf="studentAuthService.isLoggedIn()">
                  <div
                    class="px-5 py-3 border-b border-slate-50 mb-2 bg-gradient-to-r from-purple-50 to-blue-50"
                  >
                    <p
                      class="text-xs font-bold text-purple-600 uppercase tracking-widest mb-0.5"
                    >
                      CodeWarrior
                    </p>
                    <p class="text-sm font-bold text-slate-900 truncate">
                      {{ studentAuthService.currentStudentValue?.username }}
                    </p>
                  </div>
                  <a
                    routerLink="/student-playground"
                    class="flex items-center gap-3 px-5 py-2.5 text-sm text-slate-600 hover:bg-purple-50 hover:text-purple-600 transition-colors font-medium"
                  >
                    Playground Profile
                  </a>
                  <button
                    (click)="studentLogout()"
                    class="w-full text-left flex items-center gap-3 px-5 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-semibold mt-2 border-t border-slate-50 pt-3"
                  >
                    Logout
                  </button>
                </ng-container>
              </div>
            </div>
          </div>

          <!-- Mobile Menu Toggle -->
          <button 
            (click)="toggleMobileMenu()"
            class="md:hidden text-white focus:outline-none ml-2 p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                *ngIf="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
              <path
                *ngIf="isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu Overlay -->
      <div 
        *ngIf=\"isMobileMenuOpen\"
        class=\"md:hidden fixed inset-0 top-[73px] bg-slate-900/95 backdrop-blur-xl z-[100] border-t border-slate-800 animate-fade-in\"
      >
        <div class=\"flex flex-col p-6 space-y-4\">
          <a
            routerLink=\"/services\"
            routerLinkActive=\"text-blue-500 bg-blue-500/10\"
            (click)=\"isMobileMenuOpen = false\"
            class=\"px-4 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg font-medium flex items-center justify-between\"
          >
            Services
            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 opacity-30\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />
            </svg>
          </a>
          <a
            routerLink=\"/student-playground\"
            routerLinkActive=\"text-blue-500 bg-blue-500/10\"
            (click)=\"isMobileMenuOpen = false\"
            class=\"px-4 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg font-medium flex items-center justify-between\"
          >
            Student Playground
            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 opacity-30\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />
            </svg>
          </a>
          <a
            routerLink=\"/careers\"
            routerLinkActive=\"text-blue-500 bg-blue-500/10\"
            (click)=\"isMobileMenuOpen = false\"
            class=\"px-4 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg font-medium flex items-center justify-between\"
          >
            Careers
            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 opacity-30\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />
            </svg>
          </a>
          <a
            routerLink=\"/contact\"
            routerLinkActive=\"text-blue-500 bg-blue-500/10\"
            (click)=\"isMobileMenuOpen = false\"
            class=\"px-4 py-4 rounded-xl hover:bg-white/5 transition-colors text-lg font-medium flex items-center justify-between\"
          >
            Contact Us
            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 opacity-30\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent {
  authService = inject(AuthService);
  studentAuthService = inject(StudentAuthService);

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout() {
    this.authService.logout();
    this.isMobileMenuOpen = false;
  }

  studentLogout() {
    this.studentAuthService.logout().subscribe();
    this.isMobileMenuOpen = false;
  }
}
