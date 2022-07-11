import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-guarantor-form',
  templateUrl: './guarantor-form.component.html',
  styleUrls: ['./guarantor-form.component.css']
})
export class GuarantorFormComponent implements OnInit {
  guarantorForm = new FormGroup({
    name:new FormControl(''),
    contact:new FormControl(''),
    location:new FormControl(''),
    idNumber:new FormControl(''),
  })
  guarantor(){
    console.warn(this.guarantor)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
