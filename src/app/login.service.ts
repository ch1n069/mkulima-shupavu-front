import { HttpClient , HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, observable, throwError } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private _loginurl = 'http://localhost:8000/api/signin'

  constructor(private http: HttpClient) { }

 

  loginUser(data:any):Observable<any>{
    return this.http.post(`${baseUrl}login`, data).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errormessage = ''
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        errormessage =  `Backend returned code ${error.status}, body was: `, error.error
    }
    // Return an observable with a user-facing error message.
    errormessage = 'Please fill in the fields below again and try again.'
    return throwError(() => new Error('Please fill in the fields below again and try again.'));
  }
}
