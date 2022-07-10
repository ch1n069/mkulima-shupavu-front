import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {
    loanForm = new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      idNumber:new FormControl(''),
      gender:new FormControl(''),
      occupation:new FormControl(''),
    })
    borrowLoan(){
      console.warn(this.borrowLoan)
    }
  constructor() { }

  ngOnInit(): void {
  }

}
