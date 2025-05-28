import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab-menu',
  imports: [
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonIcon,
    CommonModule,
    IonLabel,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css',
})
export class TabMenuComponent {
  tabs = [
    { label: 'Home', icon: 'pi pi-home', route: '/home' },
    { label: 'Books', icon: 'pi pi-bookmark-fill ', route: 'books' },
    { label: 'Discover', icon: 'pi pi-glove', route: 'tabs/inbox' },
    { label: 'Search', icon: 'pi pi-search', route: 'tabs/menu' },
    { label: 'More', icon: 'pi pi-ellipsis-h', route: 'tabs/menu' },
  ];

  // private router = inject(Router);
  // activeRoute: string = '';
  // activeTab: string | undefined;

  // constructor() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.activeRoute = this.getMainRoute(event.urlAfterRedirects);
  //     }
  //   });
  // }

  // private getMainRoute(url: string): string {
  //   const segments = url.split('/').filter(Boolean);
  //   return segments.length >= 2 ? `/${segments[0]}/${segments[1]}` : url;
  // }
}
