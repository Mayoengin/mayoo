import { Component } from '@angular/core';

@Component({
  selector: 'app-text-section-two',
  standalone: true,
  imports: [],
  templateUrl: './text-section-two.component.html',
  styleUrls: ['./text-section-two.component.scss']
})
export class TextSectionTwoComponent {

  scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 70; // Adjust for navbar height
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  }

}