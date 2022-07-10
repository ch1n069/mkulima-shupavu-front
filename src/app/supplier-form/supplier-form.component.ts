import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  supplierForm = new FormGroup({
    totalInputs:new FormControl(''),
  })
  supplier(){
    console.warn(this.supplier)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
