import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {


  constructor(private http:HttpClient){}

  onSubmit(data:any)
  {
    this.http.post('http://127.0.0.1:8000/auth/register/', data)
    .subscribe((result)=>{
      console.warn("result", result)


    })
    console.warn(data)

    


  }


}
