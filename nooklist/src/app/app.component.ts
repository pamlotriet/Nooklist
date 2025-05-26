import { Component, inject, OnInit } from '@angular/core';
import {
  Auth,
  User,
  user,
  browserSessionPersistence,
  indexedDBLocalPersistence,
  setPersistence,
  inMemoryPersistence,
} from '@angular/fire/auth';
import { Capacitor } from '@capacitor/core';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonRouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nooklist';

  // firebaseAuth = inject(Auth);

  // user$: Observable<User | null> = new Observable<User | null>();

  // async ngOnInit(): Promise<void> {
  //   await this.setPersistenceForPlatform();
  //   this.user$ = user(this.firebaseAuth);
  // }

  // private async setPersistenceForPlatform(): Promise<void> {
  //   const platform = Capacitor.getPlatform();
  //   console.log('Platform:', platform);
  //   const persistence =
  //     platform === 'web'
  //       ? browserSessionPersistence
  //       : platform === 'ios'
  //       ? inMemoryPersistence
  //       : indexedDBLocalPersistence;

  //   console.log('Persistence:', persistence);

  //   try {
  //     await setPersistence(this.firebaseAuth, persistence);
  //     console.log('✅ Persistence set');
  //   } catch (err) {
  //     console.error('❌ Failed to set persistence:', err);
  //   }
  // }
}
