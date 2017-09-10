import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteGuardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const requiresLogin = route.data.requiresLogin || false;
    const requiresNotLoggedIn = route.data.requiresNotLoggedIn || false;

    if (requiresNotLoggedIn && this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    if (requiresLogin && !this.authService.isLoggedIn()) {
      const previousUrl = [];
      let combine = route;
      previousUrl.push(combine.url);

      while (combine.parent) {
        previousUrl.unshift(combine.parent.url);
        combine = combine.parent;
      }

      this.router.navigate(['login', { return: previousUrl.join('/') }]);
    }

    return true;
  }
}
