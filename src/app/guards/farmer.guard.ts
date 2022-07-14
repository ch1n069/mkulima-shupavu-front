import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppServiceService } from '../service/app-service.service';

@Injectable({

  providedIn: 'root'
})

export class FarmerGuard implements CanActivate {


  constructor(private appService: AppServiceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.appService.isFarmer()) {
      this.router.navigate(["/farmer"])
      return false
    }
    return true;
  }

}
