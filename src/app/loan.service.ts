import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  LoanService: any;

  constructor( private http: HttpClient) { }
  getLoan(data:any):Observable<any>{
    return this.http.post(`${baseUrl}api/loan/`, data)


  }
}
