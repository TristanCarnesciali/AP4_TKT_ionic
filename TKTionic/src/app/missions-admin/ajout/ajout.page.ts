import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  form: any = {
    libelle: null,
    description: null
  };

  ngOnInit(): void {
  }

  submitForm(): void {

    this.http.post('http://127.0.0.1:3000/mission',
    { libelle: this.form.libelle, description: this.form.description, complete: 0, commentaire: null, idEnclos: null, idAnimal: null, idUser: null, idEtat: 0, date: Date.now()})
    .subscribe({
      next: () => {
        this.Retour();
        this.form = null;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  Retour() {
    this.router.navigateByUrl(`/missions-admin`);
  }
}
