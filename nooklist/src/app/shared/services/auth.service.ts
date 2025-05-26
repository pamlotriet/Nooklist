import { inject, Injectable, OnInit } from '@angular/core';
import {
  Auth,
  browserSessionPersistence,
  indexedDBLocalPersistence,
  inMemoryPersistence,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  User,
  user,
} from '@angular/fire/auth';
import { Capacitor } from '@capacitor/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);

  // async login(email: string, password: string) {
  //   console.log('Inside login');
  //   // this.setPersistenceForPlatform();
  //   const promise = signInWithEmailAndPassword(
  //     this.firebaseAuth,
  //     email,
  //     password
  //   ).then(() => {
  //     console.log('logged in');
  //     console.log(promise);
  //   });

  //   return from(promise);
  // }

  async login(email: string, password: string) {
    console.log('Inside login');

    const platform = Capacitor.getPlatform();

    try {
      if (platform !== 'ios') {
        console.log('Setting persistence for non-iOS platform:', platform);
        await setPersistence(this.firebaseAuth, indexedDBLocalPersistence);
        console.log('✅ Persistence set');
      } else {
        console.log('⚠️ Skipping setPersistence on iOS');
        // Firebase will fall back to inMemoryPersistence in WebView
      }

      const userCredential = signInWithEmailAndPassword(
        this.firebaseAuth,
        email,
        password
      ).then((userCredential) => {
        console.log('User signed in:', userCredential);
        sessionStorage.setItem('user', JSON.stringify(userCredential.user));
      });
      console.log('Login promise:', userCredential);
    } catch (e) {
      console.error('❌ Login failed:', e);
    }
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }
}
