import { inject, Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { AppUser } from '../models/authentication.models';
import { setLogLevel, LogLevel } from '@angular/fire';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  user!: User;

  login(email: string, password: string): Observable<AppUser> {
    setLogLevel(LogLevel.VERBOSE);
    return from(
      signInWithEmailAndPassword(this.firebaseAuth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;

          // Strip down the user object to a serializable version
          const simplifiedUser: AppUser = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
          };

          sessionStorage.setItem('user', JSON.stringify(simplifiedUser));
          return simplifiedUser;
        }
      )
    );
  }

  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth).then(() => {
      sessionStorage.clear();
    });
    return from(promise);
  }
}
