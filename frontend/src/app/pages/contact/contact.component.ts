import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { SeoService } from '../../services/seo.service';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="bg-slate-50 min-h-screen">
      <!-- High-End Hero Section -->
      <section class="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
          <img src="assets/images/contact-us.jpg" alt="Contact Entropy Infotech" class="w-full h-full object-cover object-center" />
        </div>
        
        <!-- Dark Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10 z-10"></div>
        
        <!-- Content -->
        <div class="relative z-20 container mx-auto px-6 text-center mt-12 transition-all duration-1000 animate-fade-in-up">
          <div class="inline-block bg-white/10 backdrop-blur-md px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-6 border border-white/20">
            <span class="text-blue-200 font-semibold tracking-widest text-xs md:text-sm uppercase">Get In Touch</span>
          </div>
          <h1 class="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            Contact Us
          </h1>
          <p class="text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <!-- Contact Form Layout -->
      <section class="py-24">
        <div class="container mx-auto px-6 max-w-6xl">
        <div
          class="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          <div
            class="md:w-1/3 bg-blue-600 p-12 text-white flex flex-col justify-between"
          >
            <div>
              <h2 class="text-4xl font-bold mb-6 tracking-tight">
                Let's talk.
              </h2>
              <p class="text-blue-100 text-lg mb-12">
                Have a project in mind or just want to say hi? Reach out to us.
              </p>

              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <span>Fill this form, we will reach you out</span>
                </div>
              </div>
            </div>

            <div class="text-sm opacity-50">Entropy Infotech Corporate HQ</div>
          </div>

          <div class="md:w-2/3 p-8 md:p-20">
            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              class="space-y-8"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label
                    class="text-slate-400 text-xs font-bold uppercase tracking-widest"
                    >Your Name</label
                  >
                  <input
                    type="text"
                    formControlName="name"
                    class="w-full bg-slate-800 border-b border-slate-700 text-white p-4 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600"
                    placeholder="Full Name"
                  />
                  <div
                    *ngIf="
                      contactForm.get('name')?.touched &&
                      contactForm.get('name')?.invalid
                    "
                    class="text-rose-500 text-xs mt-1"
                  >
                    <span *ngIf="contactForm.get('name')?.errors?.['required']"
                      >Name is required.</span
                    >
                  </div>
                </div>
                <div class="space-y-2">
                  <label
                    class="text-slate-400 text-xs font-bold uppercase tracking-widest"
                    >your email</label
                  >
                  <input
                    type="email"
                    formControlName="email"
                    class="w-full bg-slate-800 border-b border-slate-700 text-white p-4 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600"
                    placeholder="valid email"
                  />
                  <div
                    *ngIf="
                      contactForm.get('email')?.touched &&
                      contactForm.get('email')?.invalid
                    "
                    class="text-rose-500 text-xs mt-1"
                  >
                    <span *ngIf="contactForm.get('email')?.errors?.['required']"
                      >Email is required.</span
                    >
                    <span *ngIf="contactForm.get('email')?.errors?.['email']"
                      >Invalid email format.</span
                    >
                    <span
                      *ngIf="contactForm.get('email')?.errors?.['blacklisted']"
                      >Domain is blacklisted.</span
                    >
                    <span
                      *ngIf="contactForm.get('email')?.errors?.['pendingAsync']"
                      >Verifying address...</span
                    >
                  </div>
                </div>
              </div>

              <div class="space-y-2">
                <label
                  class="text-slate-400 text-xs font-bold uppercase tracking-widest"
                  >Subject</label
                >
                <input
                  type="text"
                  formControlName="subject"
                  class="w-full bg-slate-800 border-b border-slate-700 text-white p-4 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600"
                  placeholder="Project Inquiry"
                />
              </div>

              <div class="space-y-2">
                <label
                  class="text-slate-400 text-xs font-bold uppercase tracking-widest"
                  >Message</label
                >
                <textarea
                  formControlName="message"
                  rows="5"
                  class="w-full bg-slate-800 border-b border-slate-700 text-white p-4 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                [disabled]="!contactForm.valid || isSubmitting"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] shadow-xl shadow-blue-500/20"
              >
                {{ isSubmitting ? 'Sending...' : (contactForm.pending ? 'Verifying...' : 'Send Message') }}
              </button>

              <div
                *ngIf="successMessage"
                class="bg-emerald-500/10 text-emerald-500 p-4 rounded-xl text-center font-bold"
              >
                {{ successMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
    </div>
  `,
  styles: [],
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private seo = inject(SeoService);

  isSubmitting = false;
  successMessage = '';

  ngOnInit() {
    this.seo.updateMetaTags(
      'Contact Us',
      'Have a project in mind? Reach out to Entropy Infotech for innovative software solutions, AI, and creative design inquiries.'
    );
  }

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: [
      '',
      {
        validators: [
          Validators.required,
          Validators.email,
          this.customDomainValidator,
        ],
        asyncValidators: [this.asyncEmailValidator.bind(this)],
        updateOn: 'blur',
      },
    ],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  // Custom Validator - Check for blacklisted domains
  customDomainValidator(control: AbstractControl) {
    const email = control.value;
    if (email && email.endsWith('tempmail.com')) {
      return { blacklisted: true };
    }
    return null;
  }

  // Asynchronous Validator - Simulating an email availability check
  asyncEmailValidator(control: AbstractControl) {
    return of(null).pipe(
      delay(1000), // Simulate API delay
      map(() => {
        // Just for demo - any email with "taken" fails
        if (control.value && typeof control.value === 'string' && control.value.includes('taken')) {
          return { taken: true };
        }
        return null;
      }),
    );
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.contactService.submitMessage(this.contactForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.successMessage = 'Thank you! Your message has been received.';
          this.contactForm.reset();
          setTimeout(() => (this.successMessage = ''), 5000);
        },
        error: () => {
          this.isSubmitting = false;
          alert('Something went wrong. Please try again.');
        },
      });
    }
  }
}
