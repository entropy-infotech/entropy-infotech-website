import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Quiz {
  _id?: string;
  name: string;
  questions: string;
  color: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  initial: string;
  studentsActive: string;
}

export interface Activity {
  _id?: string;
  user: string;
  action: string;
  time: string;
  color: string;
}

export interface LeaderboardEntry {
  _id?: string;
  rank: number;
  name: string;
  score: string;
  trend: 'up' | 'down' | 'stable';
  avatarColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlaygroundService {
  private apiUrl = 'http://localhost:5000/api/playground';

  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.apiUrl}/quizzes`);
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/activities`);
  }

  getLeaderboard(): Observable<LeaderboardEntry[]> {
    return this.http.get<LeaderboardEntry[]>(`${this.apiUrl}/leaderboard`);
  }

  getStats(): Observable<{ totalStudents: number; totalQuizzes: number; totalActivities: number }> {
    return this.http.get<any>(`${this.apiUrl}/stats`);
  }

  seedData(): Observable<any> {
    return this.http.post(`${this.apiUrl}/seed`, {});
  }

  getAIQuestions(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/quiz/questions/${category}`);
  }

  submitQuizResult(score: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/quiz/submit`, { score }, { withCredentials: true });
  }
}
