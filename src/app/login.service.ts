import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private _loginurl = 'http://localhost:8000/api/signin'

  constructor(private http: HttpClient) { }

 

  loginUser(data:any):Observable<any>{
    return this.http.post(`${baseUrl}login/`, data);
  }
}
