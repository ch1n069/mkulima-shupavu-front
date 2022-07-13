import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
    loanForm = new FormGroup({
      firstName:new FormControl('', [Validators.required]),
      lastName:new FormControl('', [Validators.required]),
      idNumber:new FormControl('', [Validators.required]),
      gender:new FormControl('', [Validators.required]),
      location:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required,Validators.email]),
    });
    borrowLoan(){
      console.warn(this.loanForm.value)
    }
    get firstName(){
      return this.loanForm.get('firstName');
    }
    get lastName(){
      return this.loanForm.get('lastName');
    }
    get idNumber(){
      return this.loanForm.get('idNumber');
    }
    get gender(){
      return this.loanForm.get('gender');
    }
    get location(){
      return this.loanForm.get('location');
    }
    get email(){
      return this.loanForm.get('email');
    }


  constructor() { }

  ngOnInit(): void {
  }

}
