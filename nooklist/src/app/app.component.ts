import { Component, inject } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { TabMenuComponent } from './shared/components/tab-menu/tab-menu.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonRouterOutlet, TabMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nooklist';
  router = inject(Router);

  isLoginRoute(): boolean {
    const hiddenRoutes = ['/login'];

    const isHidden = this.router.isActive('/login', {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });

    hiddenRoutes.some((routes) => this.router.url.includes(routes));
    return isHidden;
  }
}
