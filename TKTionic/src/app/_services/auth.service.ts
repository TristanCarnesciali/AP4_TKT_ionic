import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiURL = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private actRoute: ActivatedRoute) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiURL + '/login', {
      username,
      password,
    }, this.httpOptions);
  }

  createUser(username: string, email: string, password: string, idRole: number) : Observable<any> {
    return this.http.post<any>(this.apiURL + '/register', {
      username, email, password, idRole
    }).pipe(catchError(this.errorHandler))
  }
  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
