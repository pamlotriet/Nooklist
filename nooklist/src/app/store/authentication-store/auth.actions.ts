import { createActionGroup, emptyProps, props } from '@ngrx/store';
import {
  AppUser,
  signInWithEmailAndPassword,
} from '../../shared/models/authentication.models';

export const AuthenticationActions = createActionGroup({
  source: 'Authenticaton',
  events: {
    authInitialState: emptyProps(),
    signInWithEmailAndPassword: props<{
      userDetails: signInWithEmailAndPassword;
    }>(),
    signInWithEmailAndPasswordSuccess: props<{ user: AppUser }>(),
    signInWithEmailAndPasswordFailure: (error: string) => ({ error }),
  },
});
