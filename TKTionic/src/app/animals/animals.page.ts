import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})

export class AnimalsPage implements OnInit {

  dataAnimals: any = [];  
  id = this.actRoute.snapshot.params['id'];

  constructor(private http: HttpClient, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllAnimals().subscribe((data: any) =>{
      this.dataAnimals = data.animal;
    })  
  }

  getAllAnimals(): Observable<any> {
    return this.http.get<any>("http://localhost:3000/animaux").pipe();
  }

  getAnimalDetail(id: any) : Observable<any> {
    return this.http.get<any>("http://localhost:3000/animal/" + id).pipe();
  }
}
