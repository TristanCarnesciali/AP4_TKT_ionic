import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  niveau: Number;

  form: any = {
    libelle: null,
    description: null
  };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  submitForm() {
    let { libelle, description } = this.form;
    if (!libelle || !description || !this.niveau) {
      return;
    }

    this.http.post('http://127.0.0.1:3000/avertissement', { "libelle": libelle, "description": description, "idNiveau": this.niveau })
      .subscribe({
        next: () => {
          console.log("aze");
          this.router.navigateByUrl('/alertes-admin');
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  radioChange(event: any) {
    this.niveau = event.detail.value;
  }

  Retour() {
    this.router.navigateByUrl('/alertes-admin');
  }
}
