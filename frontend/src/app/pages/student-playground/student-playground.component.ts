import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { PlaygroundService, Quiz, Activity, LeaderboardEntry } from '../../services/playground.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentAuthService } from '../../services/student-auth.service';
import { RouterLink } from '@angular/router';

interface ChatMessage {
  sender: string;
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-student-playground',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './student-playground.component.html',
  styleUrl: './student-playground.component.css'
})
export class StudentPlaygroundComponent implements OnInit, OnDestroy {
  visitorName: string = '';
  isJoined: boolean = false;
  newMessage: string = '';
  messages: ChatMessage[] = [];
  activeTab: string = 'trending';
  private socket!: Socket;

  activities: Activity[] = [];
  quizCategories: Quiz[] = [];
  leaderboard: LeaderboardEntry[] = [];

  // Quiz State
  activeQuiz: Quiz | null = null;
  quizQuestions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  isQuizLoading: boolean = false;
  isQuizCompleted: boolean = false;
  onlineUserCount: number = 0;

  constructor(
    private playgroundService: PlaygroundService,
    public authService: StudentAuthService
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get username(): string {
    return this.authService.currentStudentValue?.username || '';
  }

  ngOnInit() {
    this.socket = io('http://localhost:5000'); // connecting to backend server

    this.socket.on('chat_message', (data: ChatMessage) => {
      this.messages.push(data);
    });

    this.socket.on('user_count_update', (count: number) => {
      this.onlineUserCount = count;
    });

    this.fetchPlaygroundData();
  }

  fetchPlaygroundData() {
    this.playgroundService.getQuizzes().subscribe(data => {
      this.quizCategories = data;
    });

    this.playgroundService.getActivities().subscribe(data => {
      this.activities = data;
    });

    this.playgroundService.getLeaderboard().subscribe(data => {
      this.leaderboard = data;
    });
  }

  ngOnDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  joinChat() {
    if (this.visitorName.trim()) {
      this.isJoined = true;
    }
  }

  sendMessage() {
    if (this.newMessage.trim() && this.isJoined) {
      const msg: ChatMessage = {
        sender: this.visitorName,
        text: this.newMessage,
        timestamp: new Date()
      };
      this.socket.emit('chat_message', msg);
      this.newMessage = '';
    }
  }

  startQuiz(quiz: Quiz) {
    if (!this.authService.isLoggedIn()) {
      alert('Please login to participate in the Battle Zone and earn points!');
      return;
    }

    this.activeQuiz = quiz;
    this.isQuizLoading = true;
    this.isQuizCompleted = false;
    this.currentQuestionIndex = 0;
    this.score = 0;

    this.playgroundService.getAIQuestions(quiz.name).subscribe({
      next: (questions) => {
        this.quizQuestions = questions;
        this.isQuizLoading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to load AI questions. Please try again later.');
        this.isQuizLoading = false;
        this.activeQuiz = null;
      }
    });
  }

  selectOption(optionIndex: number) {
    if (optionIndex === this.quizQuestions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }

    if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.completeQuiz();
    }
  }

  completeQuiz() {
    this.isQuizCompleted = true;
    this.playgroundService.submitQuizResult(this.score).subscribe({
      next: (res) => {
        console.log('Quiz submitted:', res);
        this.fetchPlaygroundData(); // Refresh leaderboard
      },
      error: (err) => {
        console.error('Submission error:', err);
      }
    });
  }

  closeQuiz() {
    this.activeQuiz = null;
    this.isQuizCompleted = false;
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.fetchPlaygroundData(); // Refresh to show anonymous state
      }
    });
  }
}
