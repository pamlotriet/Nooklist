import { createReducer, on, Action } from '@ngrx/store';
import { AuthenticationActions } from './auth.actions';
import { AppUser } from '../../shared/models/authentication.models';
export const authFeatureKey = 'authentication';

export interface AuthState {
  isLoading: boolean;
  error?: string | null;
  user: AppUser | null;
}

export const initialAuthenticationState: AuthState = {
  isLoading: false,
  error: '',
  user: null,
};

const reducer = createReducer(
  initialAuthenticationState,
  on(
    AuthenticationActions.authInitialState,
    (): AuthState => initialAuthenticationState
  ),
  on(
    AuthenticationActions.signInWithEmailAndPassword,
    (state): AuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    AuthenticationActions.signInWithEmailAndPasswordSuccess,
    (state, { user }): AuthState => ({
      ...state,
      isLoading: false,
      user,
    })
  ),
  on(
    AuthenticationActions.signInWithEmailAndPasswordFailure,
    (state, { error }): AuthState => ({
      ...state,
      isLoading: false,
      error,
    })
  )
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
