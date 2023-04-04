import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserService } from 'src/app/user/data-access/user.service';
import { UtilsService } from '../data-access/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private utilsService: UtilsService,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.utilsService.token) {
        return this.router.navigateByUrl('user/register');
      }
      return this.userService.validateToken()
        .pipe(
          tap(isAuthenticated => {
            if (!isAuthenticated) {
              this.router.navigateByUrl('user/register');
            }
          })
        );
  }
}
