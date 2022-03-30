import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.page.html',
  styleUrls: ['./unique.page.scss'],
})
export class UniquePage implements OnInit {

  mission = 
  {
    "id": "",
    "libelle": "",
    "description": "",
    "complete": false,
    "commentaire": "",
    "idEnclos": null,
    "idAnimal": null,
    "idUser": null,
    "idEtat": null,
    "date": null,
  }

  animal = 
  {
    "id": null,
    "nom": "",
    "idEnclos": null,
    "idEspece": null,
    "idSante": null
  }

  enclos = 
  {
    "id": null,
    "libelle": ""
  }

  users: Array<any>;

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ionViewWillEnter() {
    this.laodMission();
  }

  ngOnInit() {
    this.laodMission();
  }

  laodMission() {
    let id: Number;
    
    this.route.queryParams.subscribe(params => {
      id = params["id"]
    });

    fetch(`http://127.0.0.1:3000/mission/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.mission = data.mission;
      // get date and hour only
      this.mission.date = this.mission.date.substring(0, 10);
      if (this.mission.idEnclos != null)
        this.FetchEnclos();
      else if (this.mission.idAnimal != null)
        this.FetchAnimal();
      this.FetchUsers();
    }).catch((error) => {
      console.log(error);
    });
  }

  FetchEnclos() {
    fetch(`http://127.0.0.1:3000/enclos/${this.mission.idEnclos}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.enclos = data.enclos;
    }).catch((error) => {
      console.log(error);
    });
  }

  FetchAnimal() {
    fetch(`http://127.0.0.1:3000/animal/${this.mission.idAnimal}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.animal = data.animal;
    }).catch((error) => {
      console.log(error);
    });
  }

  FetchUsers() {
    fetch(`http://127.0.0.1:3000/users`)
    .then((resp) => resp.json())
    .then((data) => {
      this.users = data.users;
      console.log(this.users);
    }).catch((error) => {
      console.log(error);
    });
  }

  Retour() {
    this.router.navigateByUrl(`/missions-admin`);
  }
}
