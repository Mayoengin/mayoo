import { Component } from '@angular/core';
import { ProfilePicTwoComponent } from "../components/profile-pic-two/profile-pic-two.component";
import { TextSectionTwoComponent } from "../components/text-section-two/text-section-two.component";

@Component({
  selector: 'app-second-layout',
  standalone: true,
  imports: [ProfilePicTwoComponent, TextSectionTwoComponent],
  templateUrl: './second-layout.component.html',
  styleUrl: './second-layout.component.scss'
})
export class SecondLayoutComponent {

}
