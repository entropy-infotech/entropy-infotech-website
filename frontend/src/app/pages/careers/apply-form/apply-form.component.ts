import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CareerService } from '../../../services/career.service';

@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  template: `
    <div class="min-h-screen bg-slate-50 py-24">
      <div class="container mx-auto px-6">
        <!-- Header -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <div class="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Professional Application
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-6">Join our creative team.</h1>
          <p class="text-slate-500 font-medium max-w-2xl mx-auto italic">"Building the future of digital solutions, together."</p>
        </div>

        <!-- Form Card -->
        <div class="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <div class="p-8 md:p-16">
            <form [formGroup]="applyForm" (ngSubmit)="onSubmit()" class="space-y-16">
              
              <!-- Section 1: Personal Information -->
              <section class="space-y-8">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">1</div>
                  <h2 class="text-2xl font-black text-slate-900">Personal Information</h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input formControlName="fullName" type="text" placeholder="John Doe" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none">
                  </div>
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input formControlName="email" type="email" placeholder="john@example.com" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input formControlName="phone" type="tel" placeholder="+91 00000 00000" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none" [class.border-red-500]="applyForm.get('phone')?.touched && applyForm.get('phone')?.invalid">
                    <p *ngIf="applyForm.get('phone')?.touched && applyForm.get('phone')?.invalid" class="text-red-500 text-[10px] font-bold ml-1">Please enter a valid phone number (10-15 digits).</p>
                  </div>
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">City / Country</label>
                    <input formControlName="cityCountry" type="text" placeholder="New York, USA" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none" [class.border-red-500]="applyForm.get('cityCountry')?.touched && applyForm.get('cityCountry')?.invalid">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-3">
                      <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Date of Birth</label>
                      <input formControlName="dateOfBirth" type="date" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none">
                    </div>
                    <div class="space-y-3">
                      <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Role of Interest</label>
                      <select formControlName="role" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none appearance-none">
                        <option value="" disabled>Select a role</option>
                        <option *ngFor="let r of roles" [value]="r">{{ r }}</option>
                      </select>
                    </div>
                </div>
              </section>

              <hr class="border-slate-100">

              <!-- Section 2: Education Details -->
              <section class="space-y-8">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">2</div>
                  <h2 class="text-2xl font-black text-slate-900">Education Details</h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Highest Qualification</label>
                    <select formControlName="highestQualification" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none appearance-none">
                      <option value="" disabled>Select</option>
                      <option *ngFor="let q of qualifications" [value]="q">{{ q }}</option>
                    </select>
                  </div>
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Course / Field of Study</label>
                    <input formControlName="fieldOfStudy" type="text" placeholder="Computer Science" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">College / University Name</label>
                    <input formControlName="university" type="text" placeholder="Harvard University" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none" [class.border-red-500]="applyForm.get('university')?.touched && applyForm.get('university')?.invalid">
                  </div>
                  <div class="space-y-3">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Year of Graduation</label>
                    <input formControlName="graduationYear" type="text" placeholder="2025" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none" [class.border-red-500]="applyForm.get('graduationYear')?.touched && applyForm.get('graduationYear')?.invalid">
                    <p *ngIf="applyForm.get('graduationYear')?.touched && applyForm.get('graduationYear')?.invalid" class="text-red-500 text-[10px] font-bold ml-1">Enter a valid 4-digit year.</p>
                  </div>
                </div>
              </section>

              <hr class="border-slate-100">

              <!-- Section 3: Skills -->
              <section class="space-y-8">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">3</div>
                  <h2 class="text-2xl font-black text-slate-900">Skills</h2>
                </div>

                <div class="space-y-4">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Key Proficiencies (Skills)</label>
                    <div class="space-y-3">
                      <input 
                        formControlName="skillsInput" 
                        type="text" 
                        placeholder="e.g. Angular, React, Node.js (Comma separated)" 
                        class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none"
                        [class.border-red-500]="applyForm.get('skillsInput')?.touched && applyForm.get('skillsInput')?.invalid"
                      >
                      <p class="text-[10px] text-slate-400 font-bold ml-1 italic">Type your skills separated by commas.</p>
                    </div>
                </div>
                <!-- ... existing availableSkills code can be removed if not used, or kept if we still want suggestions ... -->
              </section>

              <hr class="border-slate-100">

              <!-- Section 4: Experience -->
              <section class="space-y-8">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">4</div>
                  <h2 class="text-2xl font-black text-slate-900">Professional Experience</h2>
                </div>

                <div class="space-y-6">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Do you have previous internship or work experience?</label>
                  <div class="flex gap-6">
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" value="Yes" formControlName="hasExperience" class="hidden peer">
                        <div class="w-6 h-6 rounded-full border-2 border-slate-200 peer-checked:border-slate-900 peer-checked:bg-slate-900 transition-all flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                        </div>
                        <span class="font-bold text-slate-600 group-hover:text-slate-900">Yes, I have.</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" value="No" formControlName="hasExperience" class="hidden peer">
                        <div class="w-6 h-6 rounded-full border-2 border-slate-200 peer-checked:border-slate-900 peer-checked:bg-slate-900 transition-all flex items-center justify-center">
                            <div class="w-2 h-2 rounded-full bg-white scale-0 peer-checked:scale-100 transition-transform"></div>
                        </div>
                        <span class="font-bold text-slate-600 group-hover:text-slate-900">No, Fresh talent.</span>
                    </label>
                  </div>

                  <div *ngIf="applyForm.get('hasExperience')?.value === 'Yes'" class="space-y-3 animate-in fade-in slide-in-from-top-2">
                    <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Describe your experience</label>
                    <textarea formControlName="experienceDescription" placeholder="Role, Duration, Key Responsibilities..." class="w-full px-8 py-6 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none min-h-[150px]"></textarea>
                  </div>
                </div>
              </section>

              <hr class="border-slate-100">

              <!-- Section 5 & 6: Links & Availability -->
               <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <section class="space-y-8">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">5</div>
                            <h2 class="text-2xl font-black text-slate-900">Links</h2>
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Portfolio / GitHub / Website Link</label>
                            <input formControlName="portfolioLink" type="url" placeholder="https://github.com/..." class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none">
                        </div>
                    </section>

                    <section class="space-y-8">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">6</div>
                            <h2 class="text-2xl font-black text-slate-900">Availability</h2>
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Hours can you work per week?</label>
                            <select formControlName="hoursPerWeek" class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none appearance-none">
                                <option value="" disabled>Select availability</option>
                                <option value="5–10">5–10 Hours</option>
                                <option value="10–20">10–20 Hours</option>
                                <option value="20+">20+ Hours</option>
                            </select>
                        </div>
                    </section>
               </div>

              <hr class="border-slate-100">

              <!-- Section 8: Resume & Message -->
              <section class="space-y-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="space-y-8">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">7</div>
                            <h2 class="text-2xl font-black text-slate-900">Resume</h2>
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Upload Resume (PDF only)</label>
                            <label class="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-200 border-dashed rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all group">
                                <div class="flex flex-center gap-3">
                                    <svg *ngIf="!selectedFile" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-400 group-hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <svg *ngIf="selectedFile" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-xs font-black" [class.text-slate-400]="!selectedFile" [class.text-emerald-700]="selectedFile">
                                        {{ selectedFile ? selectedFile.name : 'Choose PDF File (Max 5MB)' }}
                                    </span>
                                </div>
                                <input type="file" (change)="onFileSelected($event)" accept="application/pdf" class="hidden">
                            </label>
                            <p class="text-[10px] text-slate-400 font-bold ml-1 italic">Direct file upload for faster review</p>
                        </div>
                    </div>
                    <div class="space-y-8">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-black">8</div>
                            <h2 class="text-2xl font-black text-slate-900">Your Message</h2>
                        </div>
                        <div class="space-y-3">
                            <label class="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Write something to hiring team</label>
                            <input formControlName="hiringMessage" type="text" placeholder="I am excited to join..." class="w-full px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 transition-all font-bold text-slate-700 outline-none">
                        </div>
                    </div>
                </div>
              </section>

              <hr class="border-slate-100">

              <!-- Section 10: Declaration -->
              <section class="bg-slate-50 p-8 md:p-12 rounded-[2rem] space-y-8 border border-slate-100 shadow-inner">
                <div class="flex items-center gap-4 mb-4">
                  <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 font-black shadow-sm border border-slate-100">9</div>
                  <h2 class="text-2xl font-black text-slate-900">Declaration</h2>
                </div>

                <label class="flex items-start gap-4 cursor-pointer">
                    <input type="checkbox" formControlName="declaration" class="hidden peer">
                    <div class="w-7 h-7 rounded-lg border-2 border-slate-200 peer-checked:border-blue-600 peer-checked:bg-blue-600 transition-all flex items-center justify-center shrink-0 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white scale-0 peer-checked:scale-100 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <span class="font-bold text-slate-600 leading-relaxed text-sm">I confirm that the information provided is true and correct. Any misinformation may lead to immediate disqualification.</span>
                </label>
              </section>

              <!-- Submit Button -->
              <div class="pt-10 flex flex-col items-center">
                <button 
                  type="submit" 
                  [disabled]="isSubmitting || applyForm.invalid || !selectedFile"
                  class="w-full md:w-auto min-w-[320px] bg-slate-900 hover:bg-black text-white px-16 py-6 rounded-2xl font-black transition-all hover:scale-[1.05] active:scale-95 shadow-2xl shadow-slate-900/20 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-4"
                >
                  <span *ngIf="isSubmitting" class="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                  {{ isSubmitting ? 'Processing Application...' : 'Submit Final Application' }}
                </button>
                <p class="text-slate-400 text-[10px] font-black mt-8 uppercase tracking-[0.3em]">
                  Privacy Protected &bullet; Secure Transmission
                </p>
              </div>

              <!-- Status Messages -->
              <div *ngIf="submitStatus === 'success'" class="bg-emerald-50 border border-emerald-100 p-10 rounded-3xl text-emerald-700 text-center animate-in zoom-in duration-500">
                <p class="font-black text-2xl mb-2">Success! Application Received! 🎉</p>
                <p class="font-medium">Redirecting you in a few seconds...</p>
              </div>

              <div *ngIf="submitStatus === 'error'" class="bg-red-50 border border-red-100 p-10 rounded-3xl text-red-700 text-center animate-in zoom-in duration-500 text-sm">
                <p class="font-black text-2xl mb-2">Submission Interrupted</p>
                <p class="font-medium">Please check all required fields and try again.</p>
              </div>
            </form>
          </div>
        </div>

        <!-- Meta Footer -->
        <div class="text-center mt-12 mb-24">
           <a routerLink="/careers" class="text-slate-400 hover:text-slate-900 font-black text-xs uppercase tracking-widest transition-all">
             ← Return to Career Listings
           </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ApplyFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private careerService = inject(CareerService);

  applyForm: FormGroup;
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  selectedFile: File | null = null;

  roles = [
    'Frontend Developer Intern',
    'Backend Developer Intern',
    'UI/UX Designer Intern',
    'Python Developer Intern',
    'SEO Intern'
  ];

  qualifications = [
     'High School',
     'Diploma',
     'Bachelor’s Degree',
     'Master’s Degree',
     'Other'
  ];

  availableSkills = [
     'Angular', 'React', 'Node.js', 'Python', 'UI/UX Design', 
     'MongoDB', 'Tailwind CSS', 'TypeScript', 'SEO', 'Java', 'Data Analytics', 'Figma'
  ];

  constructor() {
    this.applyForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      cityCountry: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      role: ['', [Validators.required]],
      highestQualification: ['', [Validators.required]],
      fieldOfStudy: ['', [Validators.required]],
      university: ['', [Validators.required]],
      graduationYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      skills: [[]],
      skillsInput: ['', [Validators.required]],
      hasExperience: ['', [Validators.required]],
      experienceDescription: [''],
      portfolioLink: [''],
      hoursPerWeek: ['', [Validators.required]],
      resumeLink: [''],
      hiringMessage: [''],
      declaration: [false, [Validators.requiredTrue]]
    });

    this.applyForm.get('phone')?.setValidators([
      Validators.required, 
      Validators.pattern('^[0-9\\+\\-\\s]{10,15}$')
    ]);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['role']) {
        const decodedRole = decodeURIComponent(params['role']);
        if (this.roles.includes(decodedRole)) {
          this.applyForm.patchValue({ role: decodedRole });
        }
      }
    });
  }

  toggleSkill(skill: string) {
    const currentSkills = this.applyForm.get('skills')?.value as string[];
    const index = currentSkills.indexOf(skill);
    if (index === -1) {
      this.applyForm.get('skills')?.setValue([...currentSkills, skill]);
    } else {
      this.applyForm.get('skills')?.setValue(currentSkills.filter(s => s !== skill));
    }
  }

  isSkillSelected(skill: string): boolean {
    return (this.applyForm.get('skills')?.value as string[]).includes(skill);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit.');
        return;
      }
      this.selectedFile = file;
    } else {
      alert('Please select a valid PDF file.');
    }
  }

  onSubmit(): void {
    if (this.applyForm.invalid || !this.selectedFile) {
         if (!this.selectedFile) alert('Please upload your resume PDF.');
         this.applyForm.markAllAsTouched();
         return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    // Prepare FormData
    const formData = new FormData();
    
    // Convert skillsInput to skills array before submission
    const skillsArray = this.applyForm.get('skillsInput')?.value
      .split(',')
      .map((s: string) => s.trim())
      .filter((s: string) => s !== '');
    
    this.applyForm.patchValue({ skills: skillsArray });

    Object.keys(this.applyForm.controls).forEach(key => {
      const value = this.applyForm.get(key)?.value;
      if (key === 'skills') {
        formData.append(key, JSON.stringify(value));
      } else if (key !== 'skillsInput') { // Don't send the raw input
        formData.append(key, value);
      }
    });
    
    if (this.selectedFile) {
      formData.append('resume', this.selectedFile);
    }

    this.careerService.submitApplication(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitStatus = 'success';
        this.applyForm.reset();
        this.selectedFile = null;
        setTimeout(() => this.router.navigate(['/']), 3000);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitStatus = 'error';
        console.error('Submission error:', err);
      }
    });
  }
}
