import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarComponent} from "./public/components/side-bar/side-bar.component";
import {LoginComponent} from "./public/pages/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'track-my-route';
}
