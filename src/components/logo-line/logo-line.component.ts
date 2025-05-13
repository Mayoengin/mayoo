import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-line.component.html',
  styleUrls: ['./logo-line.component.scss'] // Fixed typo here too
})
export class LogoLineComponent {
  logos = [
    { src: './assets/angular-logo.png', title: 'Angular ' }, // Fixed file path
    { src: './assets/python-logo.png', title: 'Python ' }, // Fixed file path
    { src: 'assets/api.png', title: 'API' },
    { src: 'assets/figma.png', title: 'Figma' },
    { src: 'assets/git.png', title: 'Git' },
  ];
}
