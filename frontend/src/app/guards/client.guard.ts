import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const clientGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (
    authService.isLoggedIn() &&
    authService.currentUserValue?.role === 'client'
  ) {
    return true;
  }

  router.navigate(['/admin-login'], { queryParams: { returnUrl: state.url } });
  return false;
};
