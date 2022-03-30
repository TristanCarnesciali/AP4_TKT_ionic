import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.page.html',
  styleUrls: ['./unique.page.scss'],
})
export class UniquePage implements OnInit {

  id: Number;
  colors: Array<string> = ["green", "yellow", "orange", "red"];
  alerte =
  {
    "id": "",
    "libelle": "",
    "description": "",
    "idNiveau": ""
  };
  niveau =
  {
    "id": 0,
    "libelle": ""
  }

  constructor(private route: ActivatedRoute, private router: Router, private alert: AlertController, private http: HttpClient) { }

  ionViewWillEnter() {
    this.loadAlerte();
  }

  loadAlerte() {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"]
    });
    
    fetch(`http://127.0.0.1:3000/avertissement/${this.id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.alerte = data.avertissements;
      this.fetchNiveau(data.avertissements.idNiveau);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.loadAlerte();
  }

  fetchNiveau(id: Number) {
    fetch(`http://127.0.0.1:3000/niveau/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.niveau = data.niveau;

    }).catch((error) => {
      console.log(error);
    });
  }

  GotoEdit(id: Number) {
    this.router.navigateByUrl(`/alertes-admin/modifier?id=${id}`);
  }

  /**
   * Supprime l'alerte actuelle et redirige vers la page des alertes
   */
  Delete() {
    // Création de la boite de dialogue de confirmation
    this.alert.create({
      header: 'Suppression',
      message: 'Voulez-vous vraiment supprimer cette alerte ?',
      buttons: [
        {
          text: 'Oui',
          cssClass: 'secondary',
          // Suppression de l'alerte
          handler: () => {
            this.http.delete(`http://127.0.0.1:3000/avertissement/${this.id}`)
            .subscribe({
              next: () => {
                // Message d'affirmation
                this.alert.create({
                  header: 'Suppression',
                  message: 'Alerte supprimée avec succès',
                  buttons: [
                    {
                      text: 'OK',
                      // Redirection vers la page des alertes
                      handler: () => {
                        this.Retour();
                      }
                    }
                  ],
                  cssClass: 'alert-success'
                }).then(alert => alert.present());
              },
              error: (err) => {
                console.log(err);
              }
            });
          }
        },
        {
          // Annulation de la suppression
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary'
        }]
    })
    .then((alert) => alert.present());
  }

  Retour() {
    this.router.navigateByUrl("alertes-admin");
  }
}
