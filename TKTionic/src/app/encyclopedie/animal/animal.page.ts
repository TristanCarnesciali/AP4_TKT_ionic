import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage {

  espece = 
  {
    "id": "",
    "nom": "",
    "image": "",
    "description": "",
    "taille": "",
    "poidsMin": "",
    "poidsMax": "",
    "idType": "",
    "idContinent": ""
  }; // Template for json
  regime: String;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ionViewDidLeave() {
    // this.espece;
  }

  ionViewWillEnter() {
    this.loadAnimal();
  }

  loadAnimal() {
    let id;
    let idType;

    this.route.queryParams.subscribe(params => {
      id = params["id"]
    });
    fetch(`http://127.0.0.1:3000/espece/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.espece = data.espece;
      idType = data.espece.idType;
    })
    .catch((error) => {
      console.log(error);
    });

    this.fetchType();
  }

  fetchType() {
    fetch(`http://127.0.0.1:3000/type/1`).then((resp) => resp.json()).then((data) => {this.regime = data.libelle; console.log(data);});
  }

  Retour() {
    this.router.navigateByUrl("encyclopedie");
  }
}
