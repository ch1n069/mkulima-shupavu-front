import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stockForm = new FormGroup({
    fertilizerName:new FormControl('',[Validators.required]),
    herbicides:new FormControl('',[Validators.required]),
    seedsName:new FormControl('',[Validators.required]),
    fertilizerBags:new FormControl('',[Validators.required]),
    seedsBags:new FormControl('',[Validators.required]),
    pesticidesQuantity:new FormControl('',[Validators.required]),
    pesticides:new FormControl('',[Validators.required]),
    herbicidesQuantity:new FormControl('',[Validators.required]),
  })
  availabeStock()
  {
    console.warn(this.stockForm.value)
  }
  get fertilizerName(){
    return this.stockForm.get('fertilizerName');
  }
  get herbicides(){
    return this.stockForm.get('herbicides');
  }
  get seedsName(){
    return this.stockForm.get('seedsName');
  }
  get fertilizerBags(){
    return this.stockForm.get('fertilizerBags');
  }
  get seedsBags(){
    return this.stockForm.get('seedsBags');
  }
  get pesticidesQuantity(){
    return this.stockForm.get('pesticidesQuantity');
  }
  get pesticides(){
    return this.stockForm.get('pesticides');
  }
  get herbicidesQuantity(){
    return this.stockForm.get('herbicidesQuantity');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
