import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoansService } from '../loans.service';
import { AppServiceService } from '../service/app-service.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  result!: number
  loans: any;



  constructor(private router:Router , private loansService:LoansService ) { }

  ngOnInit(): void {
    this.loansService.getloans().subscribe((results)=>{
      this.loans = results.result ;
      console.log('JSON RESPONSE = ' ,JSON.stringify(results));
    })
    // console.log(typeof(this.appService.isFarmer()))
    // console.log(typeof(this.appService.isSupplier()))



  }
  



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
