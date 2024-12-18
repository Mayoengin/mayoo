import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss'],
  standalone: true,
  imports: []
})
export class TextSectionComponent {
  words: string[] = ['Developer', 'Problem Solver', 'Designer'];
  currentWordIndex: number = 0;
  displayText: string = '';
  isDeleting: boolean = false;

  typingSpeed: number = 150; // Speed of typing in ms

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('TextSectionComponent initialized in browser');
      this.typeEffect();
    } else {
      console.log('TextSectionComponent running on the server');
    }
  }

  typeEffect(): void {
    const currentWord = this.words[this.currentWordIndex];
    if (this.isDeleting) {
      this.displayText = currentWord.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = currentWord.substring(0, this.displayText.length + 1);
    }

    const speed = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;

    if (!this.isDeleting && this.displayText === currentWord) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeEffect();
      }, 1000);
      return;
    }

    if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
    }

    setTimeout(() => this.typeEffect(), speed);
  }
}
