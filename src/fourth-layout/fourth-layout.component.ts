import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fourth-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fourth-layout.component.html',
  styleUrls: ['./fourth-layout.component.scss'],
})
export class FourthLayoutComponent {
  Math = Math; // Expose Math object to the template

  services = [
    {
      image: 'assets/service-01.jpg',
      title: 'Website Design',
      description: 'Creating visually stunning, user-friendly websites that align with your brand and captivate your audience.',
      icon: 'fas fa-pencil-alt',
      rating: 4, // Example rating
    },
    {
      image: 'assets/service-02.jpg',
      title: 'Website Development',
      description: 'Building robust, responsive, and scalable websites tailored to your business needs.',
      icon: 'fas fa-code',
      rating: 4.5,
    },
    {
      image: 'assets/service-03.jpg',
      title: 'SEO Marketing',
      description: 'Boosting your online visibility with tailored SEO strategies designed to drive organic traffic, improve search rankings, and connect with your target audience. Let your business stand out where it matters most—on search engines.',
      icon: 'fas fa-chart-line',
      rating: 3.5,
    },
    {
      image: 'assets/ai.webp',
      title: 'AI Developer',
      description: 'Transforming ideas into intelligent solutions with cutting-edge AI technologies. I design, develop, and deploy AI-powered systems tailored to automate processes, enhance decision-making, and create smarter, data-driven applications.',
      icon: 'fas fa-robot',
      rating: 5,
    },
  ];

  createArray(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }
}
