import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sante',
  templateUrl: './sante.page.html',
  styleUrls: ['./sante.page.scss'],
})

export class SantePage implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  
  animalData: any = {
    id: "",
    nom: "",
    idEnclos: "",
    idEspece: "",
    idEtatSante: "",
    libelle: "",
    image: "",
    description: "",
    taille: "",
    poidsMin: "",
    poidsMax: "",
    idContinent: "",
    idType: "",
    etat: "",
    commentaire: "",
  };

  newSanteBon: any = {
    "id": this.animalData.id, 
    "idEtatSante": 1,
  };

  constructor(private actRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getAnimal(this.id).subscribe((data) => {
      this.animalData = data.animal;
      console.log(data.animal);
    })
  }

  modifSante() {
    this.updateSanteBon(this.animalData.id).subscribe((data) => {
      console.log(data)
    })
  }

  getAnimal(id: any) : Observable<any> {
    return this.http.get<any>("http://localhost:3000/animal/" + id).pipe();
  }

  updateSanteBon(id: any) : Observable<any> {
    return this.http.put<any>("http://localhost:3000/animal-sante/" + id, this.newSanteBon).pipe();
  }

}
