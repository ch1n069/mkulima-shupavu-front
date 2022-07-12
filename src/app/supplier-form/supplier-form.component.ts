import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  supplierForm = new FormGroup({
    fertilizerName:new FormControl('',[Validators.required]),
      chemicalName:new FormControl('',[Validators.required]),
      seedsName:new FormControl('',[Validators.required]),
      fertilizerBags:new FormControl('',[Validators.required]),
      seedsBags:new FormControl('',[Validators.required]),
      chemicalsBags:new FormControl('',[Validators.required]),
      fertilizerPrice:new FormControl('',[Validators.required]),
      seedsPrice:new FormControl('',[Validators.required]),
      chemicalsPrice:new FormControl('',[Validators.required]),
  })
  supplier(){
    console.warn(this.supplierForm.value)
  }
  get fertilizerName(){
    return this.supplierForm.get('fertilizerName');
  }
  get chemicalName(){
    return this.supplierForm.get('chemicalName');
  }
  get seedsName(){
    return this.supplierForm.get('seedsName');
  }
  get fertilizerBags(){
    return this.supplierForm.get('fertilizerBags');
  }
  get seedsBags(){
    return this.supplierForm.get('seedsBags');
  }
  get chemicalsBags(){
    return this.supplierForm.get('chemicalsBags');
  }
  get fertilizerPrice(){
    return this.supplierForm.get('fertilizerPrice');
  }
  get seedsPrice(){
    return this.supplierForm.get('seedsPrice');
  }
  get chemicalsPrice(){
    return this.supplierForm.get('chemicalsPrice');
  }
  get totalInputs(){
    return this.supplierForm.get('totalInputs');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
