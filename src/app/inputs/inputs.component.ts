import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  inputsForm = new FormGroup({
    fertilizerName:new FormControl(''),
    chemicalName:new FormControl(''),
    seedlingsName:new FormControl(''),
    fertilizerBags:new FormControl(''),
    seedlingsBags:new FormControl(''),
    chemicalsBags:new FormControl(''),
    fertilizerPrice:new FormControl(''),
    seedlingsPrice:new FormControl(''),
    chemicalsPrice:new FormControl(''),
  })
  myInputs(){
    console.warn(this.myInputs)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
