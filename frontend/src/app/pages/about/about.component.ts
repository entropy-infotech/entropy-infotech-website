import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="md:w-1/2">
            <span
              class="text-blue-600 font-bold uppercase tracking-widest text-sm"
              >Who We Are</span
            >
            <h2
              class="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8 leading-tight"
            >
              We are a collective of designers and engineers driven by impact.
            </h2>
            <p class="text-lg text-slate-600 mb-6 font-serif italic">
              "Technology is best when it brings people together and solves
              real-world problems. That's why we founded Entropy Infotech."
            </p>
            <p class="text-slate-600 mb-8 leading-relaxed">
              Founded in 2020, Entropy Infotech has grown from a small team of
              two to a powerhouse of digital innovation. We believe in
              transparency, excellence, and the relentless pursuit of better
              solutions.
            </p>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <div class="text-3xl font-bold text-blue-600">150+</div>
                <div class="text-slate-500 font-medium">Projects Delivered</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-600">50+</div>
                <div class="text-slate-500 font-medium">Expert Engineers</div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 grid grid-cols-2 gap-4">
            <div class="h-64 bg-slate-200 rounded-3xl animate-pulse"></div>
            <div class="h-64 bg-slate-300 rounded-3xl animate-pulse mt-8"></div>
            <div
              class="h-64 bg-slate-100 rounded-3xl animate-pulse -mt-8"
            ></div>
            <div class="h-64 bg-slate-200 rounded-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-slate-900 text-white">
      <div class="container mx-auto px-6 text-center">
        <h2
          class="text-3xl font-bold mb-16 uppercase tracking-widest opacity-50"
        >
          Our Core Values
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div class="text-blue-500 mb-4 font-black">01.</div>
            <h4 class="text-xl font-bold mb-2">Innovation</h4>
            <p class="text-slate-400 text-sm">
              Always looking for a better way to do things.
            </p>
          </div>
          <div>
            <div class="text-blue-500 mb-4 font-black">02.</div>
            <h4 class="text-xl font-bold mb-2">Integrity</h4>
            <p class="text-slate-400 text-sm">
              Honesty in every line of code and every client interaction.
            </p>
          </div>
          <div>
            <div class="text-blue-500 mb-4 font-black">03.</div>
            <h4 class="text-xl font-bold mb-2">Excellence</h4>
            <p class="text-slate-400 text-sm">
              We don't settle for "good enough".
            </p>
          </div>
          <div>
            <div class="text-blue-500 mb-4 font-black">04.</div>
            <h4 class="text-xl font-bold mb-2">Collaboration</h4>
            <p class="text-slate-400 text-sm">
              Your vision, our expertise, one team.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AboutComponent {}
