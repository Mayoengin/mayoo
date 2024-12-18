import { Component } from '@angular/core';
import { TextSectionComponent } from "../components/text-section/text-section.component";
import { ProfilePicComponent } from "../components/profile-pic/profile-pic.component";
import { LogoLineComponent } from '../components/logo-line/logo-line.component';
@Component({
  selector: 'app-first-layout',
  standalone: true,
  imports: [TextSectionComponent, ProfilePicComponent, LogoLineComponent],
  templateUrl: './first-layout.component.html',
  styleUrls: ['./first-layout.component.scss'] // Corrected property name
})
export class FirstLayoutComponent {

}
