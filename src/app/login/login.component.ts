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

  constructor(private loginService: LoginService, private router:Router){}
  
  ngOnInit(){
    this.initForm();

  }
  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[ Validators.required]),
      password : new FormControl('',[ Validators.required]),

    });
  }
   LoginProcess(){
     if(this.formGroup.valid){
       this.loginService.loginUser(this.formGroup.value).subscribe(result=>{
        
        this.router.navigate(['/farmer'])
        

         if(result!=null){
          localStorage.setItem("id_token",result.token)
          console.log(result.token)


           
         }
         else{
          alert("Check your password or email")

         }
       })
     }

   }

}