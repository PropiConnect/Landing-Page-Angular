import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from "../../components/language-switcher/language-switcher.component";
import {MatCard, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-landing',
  standalone: true,
    imports: [
        LanguageSwitcherComponent,
        MatCard,
        MatCardSubtitle,
        MatCardTitle,
        MatToolbar
    ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}