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

  getAllMissions() : Observable<any>{
    return this.http.get<any>(this.apiURL + '/missions').pipe(
      catchError(this.errorHandler))
  }

  createUser(username: string, email: string, password: string, idRole: number) : Observable<any> {
    return this.http.post<any>(this.apiURL + '/register', {
      username, email, password, idRole
    }).pipe(catchError(this.errorHandler))
  }

  getAllAnimals(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/animaux').pipe(catchError(this.errorHandler))
  }

  getAnimal(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/animal/' + id)
      .pipe();
  }

  updateAnimalSante(id: any, etat: any, animal: any): Observable<any> {
    return this.http.put<any>('http://localhost:3000/animal-sante/' + id, etat, animal)
      .pipe();
  }

  getSanteAnimal(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/animal-sante/' + id)
      .pipe();
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
