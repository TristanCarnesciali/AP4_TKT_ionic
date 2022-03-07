import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  // getType(id: any) : Observable<any> {
  //   return this.http.get<any>('http://localhost:3000/type/' + id).pipe(retry(1));
  // }

  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   this.router.navigate(['/login'])
  // }
}
