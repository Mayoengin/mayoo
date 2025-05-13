import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { FirstLayoutComponent } from "../first-layout/first-layout.component";
import { SecondLayoutComponent } from "../second-layout/second-layout.component";
import { ThirdLayoutComponent } from "../thrid-layout/thrid-layout.component";
import { FourthLayoutComponent } from "../fourth-layout/fourth-layout.component";
import { FifthLayoutComponent } from "../fifth-layout/fifth-layout.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FirstLayoutComponent, SecondLayoutComponent, ThirdLayoutComponent, FourthLayoutComponent, FifthLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected property name
})
export class AppComponent {
  title = 'portfo';
  useFirstLayout = true; // Example flag for layout switching
}
