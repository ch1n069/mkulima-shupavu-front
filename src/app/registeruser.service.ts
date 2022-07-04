import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http: HttpClient) { }
  UserRegistration(data:any):Observable<any> {
    console.log("ima laice")
    return this.http.post(`${baseUrl}rest-auth/registration/`, data);

  }
}
