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
  errormessage:any ;

  constructor(private registeruser: RegisteruserService ,private router:Router ) {
    
  }
    // role = ''
    // onSelected(value:string):void{
    //   this.role = value;
    // }
  // allprofiles = [

  //   new Si('farmer','farmer'),
  //   new FormGroup('buyer'),
  //   new FormGroup('supplier'),
  //   new FormGroup('agent'),
  //   new FormGroup('admin')
  // ]
  ngOnInit(){
    this.initForm();
  }
  roles = [
    {name:'farmer',number:1},
    {name:'buyer',number:2},
    {name:'supplier', number:3},
    {name:'agent',number:4},
    {name:'agent',number:5},




  ]
 
  initForm(){
    this.myForm = new FormGroup({
      firstname :new FormControl('',[Validators.required]),
      last_name :new FormControl('',[Validators.required]),

      username : new FormControl('',[Validators.required]),
      role: new FormControl(this.roles[1]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
      confirm_password : new FormControl('',[Validators.required]),





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


      },(error)=>{
        this.errormessage = error

        console.log(error)
      }
      )
    }
    


  }

    


  


}
