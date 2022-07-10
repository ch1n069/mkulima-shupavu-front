import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  id_token : any = localStorage.getItem('id_token');


  constructor(private router:Router){}
  
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
