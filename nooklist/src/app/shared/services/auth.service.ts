import { inject, Injectable } from '@angular/core';
import { Auth, browserSessionPersistence, setPersistence, signInWithEmailAndPassword, signOut, User, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);

  // user$: Observable<User | null>;

  // constructor() {
  //   this.setSessionStoragePersistence();
  //   this.user$ = user(this.firebaseAuth);
  // }

  // private setSessionStoragePersistence(): void {
  //   setPersistence(this.firebaseAuth, browserSessionPersistence);
  // }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {
      //
    });
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }
}
