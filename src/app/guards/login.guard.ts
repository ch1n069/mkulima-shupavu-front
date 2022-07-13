import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  // id_token : any = localStorage.getItem('user');
  id_token : any = localStorage.getItem('user');
  // JSON.parse(window.sessionStorage.getItem(USER_KEY));



  constructor(private router:Router, private loginService:LoginService){}
  
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.id_token != null){
      
      this.router.navigate(["/farmer"])
      return  false;
    }
    else{
      // this.router.navigate(["/login"])
      return true;
    }
    
  }
  
}
