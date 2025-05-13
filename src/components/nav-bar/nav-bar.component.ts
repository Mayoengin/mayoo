import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  AfterViewInit,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  isScrolled = false;
  isMenuOpen = false;
  navLinks = [
    { label: 'HOME', href: '#home', id: 'app-first-layout' },
    { label: 'ABOUT ME', href: '#about-me', id: 'app-second-layout' },
    { label: 'PROJECTS', href: '#projects', id: 'app-third-layout' },
    { label: 'SERVICES', href: '#services', id: 'app-fourth-layout' },
    { label: 'CONTACT', href: '#contact', id: 'app-fifth-layout' }
  ];
  activeLink = this.navLinks[0];
  highlightStyle: any = {};

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Check scroll to toggle the background color
      this.isScrolled = scrollTop > 50;

      // Update active link based on scroll position
      for (let i = 0; i < this.navLinks.length; i++) {
        const link = this.navLinks[i];
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop - 70; // Offset for the navbar height
          const sectionHeight = section.offsetHeight;

          if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
            this.setActiveLink(link);
            break;
          }

          // Handle last section to stay active when near the page bottom
          if (i === this.navLinks.length - 1 && scrollTop + windowHeight >= document.body.offsetHeight) {
            this.setActiveLink(link);
          }
        }
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      const targetElement = event.target as HTMLElement;

      // Check if the click is outside the menu
      if (
        this.isMenuOpen &&
        !this.elRef.nativeElement.contains(targetElement)
      ) {
        this.closeMenu();
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Reset the highlight style when the menu toggles
    if (!this.isMenuOpen) {
      this.updateHighlight();
    }
  }

  closeMenu() {
    this.isMenuOpen = false;

    // Ensure the highlight is updated when the menu closes
    this.updateHighlight();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateHighlight();
      this.setActiveLink(this.activeLink);
    }
  }

  setActiveLink(link: any) {
    this.activeLink = link;

    this.updateHighlight();
  }

  updateHighlight() {
    if (isPlatformBrowser(this.platformId)) {
      const listItem = document.querySelectorAll('.nav-links li')[this.navLinks.indexOf(this.activeLink)] as HTMLElement;

      if (listItem) {
        this.highlightStyle = {
          width: `${listItem.offsetWidth}px`,
          left: `${listItem.offsetLeft}px`
        };
      }
    }
  }

  scrollToSection(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.getElementById(id);
      if (section) {
        const offsetTop = section.offsetTop - 70; // Offset for the navbar height
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      this.closeMenu(); // Close menu on navigation
    }
  }
}