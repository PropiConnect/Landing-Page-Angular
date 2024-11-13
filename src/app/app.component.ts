import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCard, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {LanguageSwitcherComponent} from "./components/language-switcher/language-switcher.component";
import {LandingComponent} from "./pages/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardSubtitle, MatCardTitle, MatCard, MatToolbar, LanguageSwitcherComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingpage2';
}
