import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../servcies/auth.service';

export const authGuard: CanActivateFn = (route, state, ) => {
  { 
    if (inject(AuthService).isAuthenticatedUser()) {
      return true;
    } else {
      inject(Router).navigate(['/login'])
      return false;
    }
  }
};
