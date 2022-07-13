import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.css']
})
export class BuyerFormComponent implements OnInit {
  buyerForm = new FormGroup({
    cropToBuy:new FormControl(''),
    noOfBags:new FormControl(''),
  })
  myItems(){
    console.warn(this.myItems)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
