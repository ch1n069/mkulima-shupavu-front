import { Injectable } from '@angular/core';
// export interface IUser{
//   access:string
//   authenticatedUserrole:string
//   tokens:str
// }
@Injectable({

  providedIn: 'root'

})
export class AppServiceService {
  roles = localStorage.getItem('roles');
  // user = localStorage.getItem('id_token');
  constructor() { }


  isFarmer(){
    return this.getRoles(this.roles)

  }
  isBuyer(){
    return this.getRoles(this.roles)

  }
  isSupplier(){
    return this.getRoles(this.roles)


  }

  getRoles(role?: any): string{
    let roles 
    if(role){
      roles = role
    }
    if(role?.hasOwnProperty('1')){
      roles = 'farmer'
    }
    if(role?.hasOwnProperty('2')){
      roles = 'buyer'
    }
    // if(role.hasOwnProperty('3')){
    //   roles = 'agnet'
    // }
    if(role?.hasOwnProperty('4')){
      roles = 'supplier'
    }
    // if(role.hasOwnProperty('5')){
    //   roles = 'admin'
    // }


    return roles
  }


}
