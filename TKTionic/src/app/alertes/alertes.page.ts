import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alertes',
  templateUrl: './alertes.page.html',
  styleUrls: ['./alertes.page.scss'],
  // template: `
  //   <ion-list>
  //     <ion-input placeholder="titre"></ion-input>
  //   </ion-list>
  // `

})
export class AlertesPage implements OnInit {
  form: any = {
    libelle: null,
    description: null,
    niveau: null
  };
  niveau = {
    value: null,
  };
  constructor(private router: Router,public popoverCtrl: PopoverController, private http: HttpClient, public formBuilder: FormBuilder,)
  { 
    
  }

  avertissementData = [];
  niveauData = [];

  ngOnInit() {
    this.loadavertissement();
    this.loadniv();
  }

  loadavertissement(){
    fetch(`http://127.0.0.1:3000/avertissements`)
    .then((resp) => resp.json())
    .then((data) => {
      this.avertissementData = data.avertissements;
      console.log(this.avertissementData);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  public showDetail(id: number): void {
    this.router.navigateByUrl(`alertes/detail?id=${id}`);
  }

  loadniv(){
    fetch(`http://127.0.0.1:3000/niveaux`)
    .then((resp) => resp.json())
    .then((data) => {
      this.niveauData = data.niveau;
      console.log(this.niveauData);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  onSubmit(): void {
    const { libelle, description, niveau } = this.form;
    this.http
        .post(`http://127.0.0.1:3000/avertissement`, {libelle: libelle, description: description, idNiveau: niveau})
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error),
        });
  }

  radioChange(event: any) {
    this.niveau = event.detail
  } 

}
