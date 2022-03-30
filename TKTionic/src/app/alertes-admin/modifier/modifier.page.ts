import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
})
export class ModifierPage implements OnInit {
  
  id: Number;
  alerte =
  {
    "id": "",
    "libelle": "",
    "description": "",
    "idNiveau": ""
  };

  form: any = {
    "id": "",
    "libelle": "",
    "description": "",
    "idNiveau": ""
  };

  niveaux: Array<any>;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ionViewWillEnter() {
    this.loadAlerte();
  }

  ngOnInit() {
    this.loadAlerte();
  }

  submitForm() {
    this.http.put(`http://127.0.0.1:3000/avertissement/${this.id}`,
    {"libelle": this.form.libelle, "description": this.form.description, "idNiveau": this.form.idNiveau, "id": this.id})
    .subscribe(
      {
        next: () => {
          this.router.navigateByUrl(`/alertes-admin/unique?id=${this.id}`);
        },
        error: (err) => {
          console.log(err);
        }
      }
      );
  }

  loadAlerte() {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"]
    });
    
    fetch(`http://127.0.0.1:3000/avertissement/${this.id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.alerte = data.avertissements;
      this.form = data.avertissements;
      this.fetchNiveaux();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  fetchNiveaux() {
    fetch(`http://127.0.0.1:3000/niveaux`)
    .then((resp) => resp.json())
    .then((data) => {
      this.niveaux = data.niveaux;
    }).catch((error) => {
      console.log(error);
    });
  }

  Modifier() {
  }

  radioChange(event: any) {
    this.alerte.idNiveau = event.detail.value;
  }

  Retour() {
    this.router.navigateByUrl(`/alertes-admin/unique?id=${this.id}`);
  }
}
