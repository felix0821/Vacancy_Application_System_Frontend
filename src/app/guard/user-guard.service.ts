import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{

  initialRole!: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const roles = this.tokenService.getAuthorities();
    this.initialRole = 'user';
    roles.forEach(rol => {
      if (rol === 'ADMIN') {
        this.initialRole = 'admin';
      }
    });
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.initialRole) === -1) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
