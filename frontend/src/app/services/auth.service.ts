import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = environment.apiUrl + '/auth';

  constructor() {}

  login(credentials: { username: string; password: string; token?: string }) {
    return this.http
      .post<any>(`${this.apiUrl}/login`, credentials, { withCredentials: true })
      .pipe(
        tap((response) => {
          if (response && !response.require2FA && !response.setup2FA) {
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
        }),
      );
  }

  generate2FA() {
    return this.http.get<{ secret: string; qrImageUrl: string }>(
      `${this.apiUrl}/generate-2fa`,
      { withCredentials: true },
    );
  }

  verify2FA(token: string) {
    return this.http.post(
      `${this.apiUrl}/verify-2fa`,
      { token },
      { withCredentials: true },
    );
  }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  createClient(clientData: any) {
    return this.http.post(`${this.apiUrl}/create-client`, clientData, {
      withCredentials: true,
    });
  }

  getClients() {
    return this.http.get<any[]>(`${this.apiUrl}/clients`, {
      withCredentials: true,
    });
  }

  deleteClient(id: string) {
    return this.http.delete(`${this.apiUrl}/users/${id}`, {
      withCredentials: true,
    });
  }

  getStats() {
    return this.http.get<any>(`${this.apiUrl}/stats`, {
      withCredentials: true,
    });
  }

  convertQueryToClient(messageId: string) {
    return this.http.post<any>(
      `${this.apiUrl}/convert-query`,
      { messageId },
      { withCredentials: true },
    );
  }

  logout() {
    return this.http
      .post(`${this.apiUrl}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => {
          localStorage.removeItem('currentUser');
          // If we're an admin, go to admin-login, otherwise stay/refresh
          if (this.router.url.includes('admin')) {
            this.router.navigate(['/admin-login']);
          } else {
            // Just refresh current route to update state
            window.location.reload();
          }
        }),
      )
      .subscribe();
  }

  public get currentUserValue(): User | null {
    const userStr = localStorage.getItem('currentUser');
    if (!userStr) return null;
    return JSON.parse(userStr);
  }

  public isLoggedIn(): boolean {
    return !!this.currentUserValue;
  }
}
