import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {

  loanForm !: FormGroup;
  errormessage:any
  successMessage:any
  
    // borrowLoan(){
    //   console.warn(this.loanForm.value)
    // }
    // get firstName(){
    //   return this.loanForm.get('firstName');
    // }
    // get lastName(){
    //   return this.loanForm.get('lastName');
    // }
    // get idNumber(){
    //   return this.loanForm.get('idNumber');
    // }
    // get gender(){
    //   return this.loanForm.get('gender');
    // }
    // get occupation(){
    //   return this.loanForm.get('occupation');
    // }
    // get email(){
    //   return this.loanForm.get('email');
    // }


  constructor(private loanService: LoanService, private router:Router) { }

  ngOnInit(): void {
    this.initForm();

  }

  genders = [
    {name:'male',value:'male'},
    {name:'female',value:'famale'},
   

  ]
  initForm() {
    this.loanForm = new FormGroup({
      id_number :new FormControl('',[Validators.required]),
      // location :new FormControl('',[Validators.required]),
      crop :new FormControl('',[Validators.required]),
      // gender: new FormControl(this.genders[1]),
      // occupation: new FormControl('',[Validators.required]),
      // email: new FormControl('',[Validators.required])







    });
  }
  loanProcess(){
    if(this.loanForm.valid){
      this.loanService.getLoan(this.loanForm.value).subscribe(result => { 
        
        if(result.success){
        this.router.navigate(['/farmer'])
          
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
