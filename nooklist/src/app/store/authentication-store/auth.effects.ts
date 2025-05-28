import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationActions } from './auth.actions';
import { catchError, from, map, mergeMap, of, tap } from 'rxjs';
import { NavController } from '@ionic/angular/standalone';
import { AppUser } from '../../shared/models/authentication.models';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable()
export class authEffects {
  private readonly actions$ = inject(Actions);
  private navControl = inject(NavController);

  authenticateUser$ = createEffect(
    (actions$ = inject(Actions), firebaseAuth = inject(Auth)) =>
      actions$.pipe(
        ofType(AuthenticationActions.signInWithEmailAndPassword),
        mergeMap(({ userDetails }) =>
          from(
            signInWithEmailAndPassword(
              firebaseAuth,
              userDetails.email,
              userDetails.password
            )
          ).pipe(
            map(({ user }) => {
              const simplifiedUser: AppUser = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
              };

              return AuthenticationActions.signInWithEmailAndPasswordSuccess({
                user: simplifiedUser,
              });
            }),
            catchError((error) => {
              return of(
                AuthenticationActions.signInWithEmailAndPasswordFailure(
                  error.message
                )
              );
            })
          )
        )
      ),
    { functional: true }
  );

  authenticateUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthenticationActions.signInWithEmailAndPasswordSuccess),
        tap((user) => {
          if (user) this.navControl.navigateRoot('/home');
        })
      ),
    { functional: true, dispatch: false }
  );
}
