import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    try {
      const uid = this.auth.getUserProfile().uid
      if ( uid == "k98iqZcvpCakwvYBuPIGXHK1AHJ3") {
        return true;
      }
    } catch (error) {
      this.auth.logout()
      this.router.navigate(['login-page']);
    }  
    return false;
  }
}
