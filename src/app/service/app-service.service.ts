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
    return this.getRoles().includes("1")

  }
  isBuyer(){
    return this.getRoles().includes("2")


  }
  isSupplier(){
    return this.getRoles().includes("4")



  }

  getRoles(role?: any): string[]{
    let roles = []
    roles.push(role)
    if(role){
      roles = role
    }
    roles.foreach((role:any)=>{


      if(role?.hasOwnProperty('1')){
        roles.push('farmer')
      }
      if(role?.hasOwnProperty('2')){
        roles.push('buyer')
      }
      // if(role.hasOwnProperty('3')){
      //   roles = 'agnet'
      // }
      if(role?.hasOwnProperty('4')){
        roles.push('supplier')
      }
      // if(role.hasOwnProperty('5')){
      //   roles = 'admin'
      // }

    })
    


    return roles
  }


}
