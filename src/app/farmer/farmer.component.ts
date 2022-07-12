import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  result!: number
  constructor(private router:Router) { }

  ngOnInit(): void {}



  logout(){
    localStorage.removeItem('id_token')
    this.router.navigate(['/login'])

  }
  button(){
    console.log('works')
  }
  calculate(val1:string, val2:string){
    this.result = parseInt(val1)*parseInt(val2)


  }


}
