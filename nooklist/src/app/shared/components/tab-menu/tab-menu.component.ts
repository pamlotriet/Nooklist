import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonIcon,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab-menu',
  imports: [IonTabBar, IonTabs, IonTabButton, IonIcon, CommonModule],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css',
})
export class TabMenuComponent {
  tabs = [
    { label: 'Home', icon: 'ph-house', route: 'tabs/home' },
    { label: 'Accounts', icon: 'ph-file-text', route: 'tabs/account/accounts' },
    { label: 'Inbox', icon: 'ph-envelope-simple', route: 'tabs/inbox' },
    { label: 'Menu', icon: 'ph-dots-three-outline', route: 'tabs/menu' },
  ];
}
