import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
    loanForm = new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null, Validators.required),
      idNumber:new FormControl(null, Validators.required),
      gender:new FormControl(null, Validators.required),
      occupation:new FormControl(null, Validators.required),
    });
    borrowLoan(){
      console.warn(this.borrowLoan)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
