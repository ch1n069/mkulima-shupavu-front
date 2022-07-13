import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  id_token : any = localStorage.getItem('user');
  constructor(private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.id_token == null){

      this.router.navigate(["/login"])
      return false;

    }
    else{

      // this.router.navigate(["/farmer"])
      return true;

    }
    
  }

}
