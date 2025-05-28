import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import * as AuthenticationSelector from './auth.selectors';
import { AuthenticationActions } from './auth.actions';
import { signInWithEmailAndPassword } from '../../shared/models/authentication.models';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationFacade {
  private readonly store = inject(Store);

  sUser = toSignal(this.store.select(AuthenticationSelector.selectUser));
  sLoading = toSignal(
    this.store.select(AuthenticationSelector.selectAuthenticationLoading)
  );

  signInWithUserNameAndPassword(user: signInWithEmailAndPassword): void {
    this.store.dispatch(
      AuthenticationActions.signInWithEmailAndPassword({ userDetails: user })
    );
  }
}
