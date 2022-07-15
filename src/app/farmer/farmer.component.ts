import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  result!: number
  user:any
  role:any
  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.getSessionUser
    this.role = this.user?.authenitcatedUser?.role
    console.log(this.user['authenitcatedUser'])

  }



  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['/login'])

  }
  button(){
    console.log('works')
  }
  calculate(val1:string, val2:string){
    this.result = parseInt(val1)*parseInt(val2)


  }


}
