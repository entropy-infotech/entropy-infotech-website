import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.css'],
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides = [
    {
      title: 'Who Are We?',
      description: 'We are a digital solutions company building modern websites, web applications, and analytics dashboards.'
    },
    {
      title: 'What We Do?',
      description: 'We create business websites, custom software, analytics dashboards, and provide creative graphic design solutions.'
    },
    {
      title: 'Looking for Business Solutions?',
      description: 'We help businesses grow online with powerful technology, smart automation, and modern digital products.'
    },
    {
      title: 'Are You a Student?',
      description: 'We welcome passionate students and developers who want to learn, collaborate, and build real-world projects.'
    }
  ];

  activeSlideIndex = 0;
  direction: 'next' | 'prev' = 'next';
  private slideInterval: any;

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.direction = 'next';
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    }, 6000); // Flip slide every 6 seconds
  }

  stopSlider() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  setSlide(index: number) {
    if (index > this.activeSlideIndex) {
      this.direction = 'next';
    } else if (index < this.activeSlideIndex) {
      this.direction = 'prev';
    }
    
    this.activeSlideIndex = index;
    this.stopSlider();
    this.startSlider(); // reset timer
  }
}
