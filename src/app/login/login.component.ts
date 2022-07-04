import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { FormGroup , FormControl, Validators} from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  router: any;

  constructor(private loginService: LoginService){}
  
  ngOnInit(){
    this.initForm();

  }
  initForm(){
    this.formGroup = new FormGroup({
      username : new FormControl('',[ Validators.required]),
      password : new FormControl('',[ Validators.required]),

    });
  }
   LoginProcess(){
     if(this.formGroup.valid){
       this.loginService.loginUser(this.formGroup.value).subscribe(result=>{
         if(result.success){
           console.log(result);
           alert(result.message)
           this.router.navigate(['home'])
         }
         else{
          console.log(result)
          alert(result.message)

         }
       })
     }

   }

}