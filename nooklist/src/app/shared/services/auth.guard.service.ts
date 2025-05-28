import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationFacade } from '../../store/authentication-store/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authFacade = inject(AuthenticationFacade);
  router = inject(Router);
  canActivate(): boolean {
    const user = this.authFacade.sUser();
    console.log('user', user);

    if (!user) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
