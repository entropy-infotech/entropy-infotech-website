import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="relative z-10 bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div
        class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-white text-xl font-bold mb-4 tracking-tighter">
            Entropy <span class="text-blue-500">Infotech</span>
          </h3>
          <p class="mb-6 max-w-sm leading-relaxed">
            Leading the way in digital transformation and software engineering
            excellence. Empowering businesses with cutting-edge web development
            solutions.
          </p>
          <div class="flex space-x-4">
            <!-- Social Icons would go here -->
            <div
              class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
            >
              f
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all cursor-pointer"
            >
              t
            </div>
            <div
              class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all cursor-pointer"
            >
              i
            </div>
          </div>
        </div>

        <div>
          <h4
            class="text-white font-semibold mb-4 uppercase text-xs tracking-widest"
          >
            Company
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a routerLink="/" class="hover:text-blue-400 transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                routerLink="/about"
                class="hover:text-blue-400 transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a
                routerLink="/services"
                class="hover:text-blue-400 transition-colors"
                >Our Services</a
              >
            </li>
            <li>
              <a
                routerLink="/portfolio"
                class="hover:text-blue-400 transition-colors"
                >Portfolio</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4
            class="text-white font-semibold mb-4 uppercase text-xs tracking-widest"
          >
            Support
          </h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                routerLink="/contact"
                class="hover:text-blue-400 transition-colors"
                >Contact Support</a
              >
            </li>
            <li>
              <a
                routerLink="/blog"
                class="hover:text-blue-400 transition-colors"
                >Tech Blog</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="hover:text-blue-400 transition-colors"
                >Terms of Service</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="container mx-auto px-6 mt-12 pt-8 border-t border-slate-800 text-center text-xs"
      >
        &copy; {{ currentYear }} Entropy Infotech. All rights reserved.
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
