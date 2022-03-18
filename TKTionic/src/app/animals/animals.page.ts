import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})

export class AnimalsPage implements OnInit {

  dataAnimals: any = [];
  id = this.actRoute.snapshot.params['id'];

  constructor(private authService: AuthService, private http: HttpClient, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authService.getAllAnimals().subscribe((data: any) =>{
      this.dataAnimals = data.animal;
      console.log(this.dataAnimals);
    })  
  }

  getAnimal(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/animal/' + id)
      .pipe();
  }

  editAnimal() {
    console.log(this.id)
  }

}
