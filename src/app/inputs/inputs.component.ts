import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  inputsForm = new FormGroup({
    fertilizerName:new FormControl('',[Validators.required]),
    chemicalName:new FormControl('',[Validators.required]),
    seedlingsName:new FormControl('',[Validators.required]),
    fertilizerBags:new FormControl('',[Validators.required]),
    seedlingsBags:new FormControl('',[Validators.required]),
    chemicalsBags:new FormControl('',[Validators.required]),
    fertilizerPrice:new FormControl('',[Validators.required]),
    seedlingsPrice:new FormControl('',[Validators.required]),
    chemicalsPrice:new FormControl('',[Validators.required]),
  })
  myInputs()
  {
    console.warn(this.inputsForm.value)
  }
  get fertilizerName(){
    return this.inputsForm.get('fertilizerName');
  }
  get chemicalName(){
    return this.inputsForm.get('chemicalName');
  }
  get seedlingsName(){
    return this.inputsForm.get('seedlingsName');
  }
  get fertilizerBags(){
    return this.inputsForm.get('fertilizerBags');
  }
  get seedsBags(){
    return this.inputsForm.get('seedsBags');
  }
  get chemicalsBags(){
    return this.inputsForm.get('chemicalsBags');
  }
  get fertilizerPrice(){
    return this.inputsForm.get('fertilizerPrice');
  }
  get seedlingsPrice(){
    return this.inputsForm.get('seedlingsPrice');
  }
  get chemicalsPrice(){
    return this.inputsForm.get('chemicalsPrice');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
