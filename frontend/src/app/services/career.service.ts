import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface InternshipApplication {
  _id?: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  resumeLink: string;
  portfolioLink?: string;
  linkedinLink?: string;
  githubLink?: string;
  status?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CareerService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/careers`;

  submitApplication(application: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply`, application);
  }

  getApplications(): Observable<InternshipApplication[]> {
    return this.http.get<InternshipApplication[]>(`${this.apiUrl}/admin/applications`, { withCredentials: true });
  }

  updateStatus(id: string, status: string): Observable<InternshipApplication> {
    return this.http.patch<InternshipApplication>(`${this.apiUrl}/admin/applications/${id}`, { status }, { withCredentials: true });
  }

  deleteApplication(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/applications/${id}`, { withCredentials: true });
  }
}
