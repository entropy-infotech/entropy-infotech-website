import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { io, Socket } from 'socket.io-client';
import { Title, Meta } from '@angular/platform-browser';
import { PlaygroundService, Quiz, Activity, LeaderboardEntry } from '../../services/playground.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentAuthService } from '../../services/student-auth.service';
import { RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';

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
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  private isNearBottom: boolean = true;
  isMobileMenuOpen: boolean = false;

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
  currentRound: number = 1;
  isQuizLoading: boolean = false;
  isQuizCompleted: boolean = false;
  onlineUserCount: number = 0;

  constructor(
    private playgroundService: PlaygroundService,
    public authService: StudentAuthService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get username(): string {
    return this.authService.currentStudentValue?.username || '';
  }

  ngOnInit() {
    this.titleService.setTitle('Entropy Infotech | Student Playground');
    this.metaService.updateTag({ name: 'description', content: 'Join the world\'s biggest digital playground for tech students. Compete in AI challenges, chat with peers globally, and climb the leaderboard.' });
    this.metaService.updateTag({ name: 'keywords', content: 'Student Playground, Entropy Infotech, Tech Quizzes, AI Challenges, Global Tech Students' });

    const socketUrl = environment.apiUrl.replace('/api', ''); // derive base URL from environment
    this.socket = io(socketUrl, {
      withCredentials: true
    }); // connecting to backend server

    this.socket.on('chat_message', (data: ChatMessage) => {
      this.messages.push(data);
      setTimeout(() => {
        if (this.isNearBottom) {
          this.scrollToBottom();
        }
      }, 50);
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
      this.isNearBottom = true;
    }
  }

  onChatScroll() {
    if (!this.chatContainer) return;
    const element = this.chatContainer.nativeElement;
    this.isNearBottom = element.scrollHeight - element.scrollTop - element.clientHeight < 50;
  }

  scrollToBottom() {
    try {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    } catch(err) { }
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
    this.currentRound = 1;

    this.playgroundService.getAIQuestions(quiz.name, this.currentRound).subscribe({
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

  nextRound() {
    this.currentRound++;
    this.isQuizCompleted = false;
    this.isQuizLoading = true;
    this.currentQuestionIndex = 0;
    this.score = 0;

    this.playgroundService.getAIQuestions(this.activeQuiz!.name, this.currentRound).subscribe({
      next: (questions) => {
        this.quizQuestions = questions;
        this.isQuizLoading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Failed to load Round ' + this.currentRound + ' questions. Please try again later.');
        this.isQuizLoading = false;
        this.activeQuiz = null;
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
