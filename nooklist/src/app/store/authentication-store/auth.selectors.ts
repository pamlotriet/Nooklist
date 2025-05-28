import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from './auth.reducers';

export const selectCompaniesState =
  createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthenticationLoading = createSelector(
  selectCompaniesState,
  (state: AuthState) => state.isLoading
);

export const selectUser = createSelector(
  selectCompaniesState,
  (state: AuthState) => state.user
);
