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

  errormessage : any ;


  constructor(private loginService: LoginService, private router:Router){
    
  }
  
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
        
        

         if(result!=null){
          //  sessionStorage.setItem("user",result)
          

          localStorage.setItem("user",JSON.stringify(result))
          this.router.navigate(['/farmer'])



          // localStorage.setItem("user_role",result)
          // console.log(result)

          // alert(result.token)


           
         }
         else{
          alert("Check your password or email")

         }
       },(error)=>{
         this.errormessage = error

         alert(error)
       }
       )
     }

   }

}