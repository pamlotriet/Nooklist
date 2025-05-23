import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonRouterOutlet, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nooklist';
}
