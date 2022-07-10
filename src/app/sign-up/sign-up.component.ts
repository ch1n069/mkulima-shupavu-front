import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisteruserService } from '../registeruser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private registeruser: RegisteruserService ,private router:Router) {}
  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.myForm = new FormGroup({
      username : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      password1 : new FormControl('',[Validators.required]),
      password2 : new FormControl('',[Validators.required]),





    });

  }
  registration(){
    if(this.myForm.valid){
      this.registeruser.UserRegistration(this.myForm.value).subscribe(result => { 
        
        if(result.success){
        this.router.navigate(['/login'])
          
          console.log(result)
          alert(result.message)
        }else{
          console.log(result)
          alert(result.message)
        }


      })
    }
    


  }

    


  


}
