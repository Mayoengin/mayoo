import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2, NgZone, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-third-layout',
  standalone: true,
  templateUrl: './thrid-layout.component.html',
  styleUrls: ['./thrid-layout.component.scss'],
  imports: [CommonModule],
})
export class ThirdLayoutComponent implements AfterViewInit {
  @ViewChild('projectsContainer', { static: false }) projectsContainer!: ElementRef;

  projects = [
    { image: 'assets/gameover.jpg', title: 'Text Adventure Game', description: 'This text adventure game consists of a player that represents a human, who makes certain decisions to achieve their goal. Add controls and different commands to deliver a rich and immersive story', type: 'game', languages: ['java'], platforms: ['eclipse'], url: 'https://github.com/Mayoengin/text_adventure_game' },
    { image: 'assets/registration.jpg', title: 'Employee Registration App', description: 'Employee Registration App Angular 18.api usage, dynamic entry, inline Editing in Angular', type: 'mobile web app', languages: ['angular', 'typescript'], platforms: ['windows', 'mac', 'linux'], url: 'https://github.com/Mayoengin/-Employee-Registration-app' },
    { image: 'assets/stock.jpg', title: 'Stock Predictor', description: 'Created a stock predictor using Python and Flask for backend framework as well as HTML and CSS for frontend, while also handling real-time data retrieval and LLM model integration', type: 'web app', languages: ['python', 'flask', 'html', 'css'], platforms: ['python', 'css', 'html'], url: 'https://github.com/Mayoengin/stock_prices_prediction' },
    { image: 'assets/heart.jpg', title: 'ECG Classification Model', description: 'A deep neural network with residual blocks (DNN-RB) for classifying ECG signals into six types of heartbeats. Using the MIT-BIH Arrhythmia dataset, the model inputs segmented ECG signals and outputs 6 types of classifications', type: 'model', languages: ['python', 'tensorflow', 'keras'], platforms: ['google colab'], url: 'https://github.com/Mayoengin/ecg_classification' },
    { image: 'assets/host.jpg', title: 'Nurse Link Mobile App', description: 'Developing a mobile application that facilitates the connection between the nurses and the people who need them at home on a regular basis. (Uber for nurses).', type: 'mobile web app', languages: ['flutter', 'dart'], platforms: ['windows', 'mac', 'linux'] , url: 'https://github.com/Mayoengin/nurslink_1'},
    { image: 'assets/alex.png', title: 'Alex chatbot', description: 'A Python-powered chatbot using the Olama LLM Features a 3D model frontend with emotional expressions for enhanced interactivity.', type: 'chatbot', languages: ['python', 'html', 'css'], platforms: ['windows', 'mac', 'linux'], url: 'https://github.com/Mayoengin/alex-chatbot'},
    { image: 'assets/Capture.PNG', title: 'Movie Web App', description: 'An Angular app that displays recent movies, built to improve skills and explore Angular development.', type: 'mobile web app', languages: ['angular', 'typescript'], platforms: ['windows', 'mac', 'linux'], url: 'https://mayoengin.github.io/movie-web-app' },
    { image: 'assets/hospital.webp', title: 'hospital Data analisys', description: 'As part of an internship at the hospital, we were tasked with developing an AI algorithm to analyze and share data on patients who need to lose weight for IVF-related reasons.then develop an AI to predict the next weight of the patient', type: 'web system', languages: ['models', 'excels','python','docker'], platforms: ['windows', 'mac', 'linux'], url: 'https://github.com/Mayoengin/hospital-project' },
    { image: 'assets/MRI.webp', title: 'MRI Detector AI', description: 'This project implements a CNN-based approach for brain tumor detection, utilizing data augmentation and achieving high accuracy in classification tasks.', type: 'AI Detector', languages: ['models','python'], platforms: ['windows', 'mac', 'linux'], url: 'https://github.com/Mayoengin/MRI-Brain-Tumor_detector' },
    { image: 'assets/where is waldo.webp', title: 'Waldo AI finder', description: 'Train the model using a triplet loss then Re-train the model for binary classification for finding waldo', type: 'AI Detector', languages: ['models','python'], platforms: ['windows', 'mac', 'linux'], url: 'https://github.com/Mayoengin/waldo' },
  ];

  isDragging = false;
  hasMoved = false;
  startX = 0;
  scrollLeft = 0;
  activePoint = 0;
  selectedProject: any = null;
  isModalVisible = false;
  isMobileView = false;

  constructor(
    private renderer: Renderer2,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.detectMobileView();
      const container = this.projectsContainer.nativeElement;

      this.ngZone.runOutsideAngular(() => {
        this.addEventListeners(container);
      });
    }
  }

  @HostListener('window:resize', [])
  detectMobileView(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobileView = window.innerWidth <= 768;
      if (!this.isMobileView) {
        this.activePoint = 0; // Reset active point for desktop view
      }
    }
  }

  private addEventListeners(container: HTMLElement): void {
    this.renderer.listen(container, 'mousedown', (e: MouseEvent) =>
      this.onMouseDown(e, container)
    );
    this.renderer.listen(container, 'mousemove', (e: MouseEvent) =>
      this.onMouseMove(e, container)
    );
    this.renderer.listen(container, 'mouseup', () =>
      this.onMouseUp(container)
    );
    this.renderer.listen(container, 'mouseleave', () =>
      this.onMouseUp(container)
    );
    this.renderer.listen(
      container,
      'scroll',
      this.debounce(() => this.updateActivePoint(container), 50)
    );
  }

  onMouseDown(event: MouseEvent, container: HTMLElement): void {
    this.isDragging = true;
    this.hasMoved = false;
    this.startX = event.pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;

    container.style.cursor = 'grabbing'; // Show grabbing cursor
    container.style.scrollBehavior = 'smooth'; // Disable smooth scrolling during drag
  }

  onMouseMove(event: MouseEvent, container: HTMLElement): void {
    if (!this.isDragging) return;

    const x = event.pageX - container.offsetLeft;
    const distance = x - this.startX;
    container.style.scrollBehavior = 'smooth'; // Disable smooth scrolling during drag

    if (Math.abs(distance) > 5) {
      this.hasMoved = true;
    }

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      container.scrollLeft = this.scrollLeft - distance;
    });
  }

  onMouseUp(container: HTMLElement): void {
    if (!this.isDragging) return; // Ensure this only triggers during a drag

    this.isDragging = false;
    container.style.cursor = 'grab'; // Reset cursor to grab
    container.style.scrollBehavior = 'smooth'; // Re-enable smooth scrolling after drag

    // Snap to the nearest card on drag end (if movement occurred)
    if (!this.isMobileView && this.hasMoved) {
      this.snapToClosest(container);
    }

    // Delay resetting `hasMoved` to allow for event propagation checks
    setTimeout(() => {
      this.hasMoved = false;
    }, 0);
  }

  private snapToClosest(container: HTMLElement): void {
    const cardWidth = (container.children[0] as HTMLElement).offsetWidth;
    const scrollLeft = container.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth); // Find the nearest card index
    const scrollTo = index * cardWidth; // Calculate the exact scroll position

    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth', // Smooth snapping
    });

    this.activePoint = index; // Update active point for indicators
  }
  updateActivePoint(container: HTMLElement): void {
    const cardWidth = (container.children[0] as HTMLElement).offsetWidth;
    const center = container.scrollLeft + container.offsetWidth / 3;
    const activeIndex = Math.round(center / cardWidth);
    const totalIndicators = 4; // Assuming 3 indicators
    this.activePoint = Math.min(Math.floor(activeIndex / Math.ceil(this.projects.length / totalIndicators)), totalIndicators - 1);
  }
  
  
  
  scrollToProject(index: number): void {
    const container = this.projectsContainer.nativeElement;
    const cardWidth = (container.children[0] as HTMLElement).offsetWidth;
    const scrollTo = index * cardWidth;

    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth', // Smooth transition
    });

    this.activePoint = index; // Update the active indicator
  }

  openModal(project: any): void {
    if (this.hasMoved) return; // Prevent modal from opening during drag
    this.selectedProject = project;
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.selectedProject = null;
  }

  private debounce(func: Function, delay: number): (...args: any[]) => void {
    let timer: number;
    return (...args: any[]) => {
      if (timer) cancelAnimationFrame(timer); // Cancel the previous frame
      timer = requestAnimationFrame(() => {
        func(...args); // Call the function
      });
    };
  }
}