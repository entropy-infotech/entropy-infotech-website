import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StudentAuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = environment.apiUrl + '/playground';
  
  private currentStudentSubject = new BehaviorSubject<any>(null);
  public currentStudent = this.currentStudentSubject.asObservable();

  constructor() {
    const savedStudent = localStorage.getItem('currentStudent');
    if (savedStudent) {
      this.currentStudentSubject.next(JSON.parse(savedStudent));
    }
  }

  login(credentials: { username: string; password: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap((response) => {
        if (response && response._id) {
          localStorage.setItem('currentStudent', JSON.stringify(response));
          this.currentStudentSubject.next(response);
        }
      }),
    );
  }

  register(studentData: any) {
    return this.http.post<any>(`${this.apiUrl}/register`, studentData);
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('currentStudent');
        this.currentStudentSubject.next(null);
        this.router.navigate(['/student-playground']);
      })
    );
  }

  public get currentStudentValue(): any {
    return this.currentStudentSubject.value;
  }

  public isLoggedIn(): boolean {
    return !!this.currentStudentValue;
  }
}
