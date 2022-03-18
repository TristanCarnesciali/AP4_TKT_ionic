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
    "gestation": "",
    "idType": "",
    "idContinent": ""
  }; // Template pour le json (nécessaire pour accéder aux données depuis l'HTML)

  regime = 
  {
    "id": "",
    "libelle": ""
  };
  continent = 
  {
    "id": "",
    "libelle": ""
  };

  imageId: Number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ionViewWillEnter() {
    this.loadAnimal();
  }

  loadAnimal() {
    let id: Number;

    this.route.queryParams.subscribe(params => {
      id = params["id"]
    });
    fetch(`http://127.0.0.1:3000/espece/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.espece = data.espece;
      this.fetchType(data.espece.idType);
      this.fetchContinent(data.espece.idContinent);
      this.imageId = Math.floor((Math.random() * 6));
      if (this.imageId > 5 || this.imageId <= 0)
        this.imageId = 1;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  /**
   * Récupère un régime en fonction de son ID et le met dans la variable "regime"
   * @param id L'ID du régime à récupérer
   */
  fetchType(id: Number) {
    fetch(`http://127.0.0.1:3000/type/${id}}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.regime = data.type;
    });
  }

  /**
   * Récupère un régime en fonction de son ID et le met dans la variable "continent"
   * @param id L'ID du continent à récupérer
   */
  fetchContinent(id: Number) {
    fetch(`http://127.0.0.1:3000/continent/${id}}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.continent = data.continent;
    });
  }

  Retour() {
    this.router.navigateByUrl("encyclopedie");
  }
}
