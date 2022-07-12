import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-guarantor-form',
  templateUrl: './guarantor-form.component.html',
  styleUrls: ['./guarantor-form.component.css']
})
export class GuarantorFormComponent implements OnInit {
  guarantorForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    contact:new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required]),
    idNumber:new FormControl('',[Validators.required]),
  })
  guarantor(){
    console.warn(this.guarantorForm.value)
  }
  get name(){
    return this.guarantorForm.get('name');
  }
  get contact(){
    return this.guarantorForm.get('contact');
  }
  get location(){
    return this.guarantorForm.get('location');
  }
  get idNumber(){
    return this.guarantorForm.get('idNumber');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
