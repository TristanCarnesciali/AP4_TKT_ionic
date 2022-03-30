import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-alertes-admin',
  templateUrl: './alertes-admin.page.html',
  styleUrls: ['./alertes-admin.page.scss'],
})
export class AlertesAdminPage implements OnInit {

  alertes: any;

  constructor(private router: Router) { }

  ionViewWillEnter() {
    this.loadAvertissements();
  }
  ngOnInit(): void {
    this.loadAvertissements();
  }

  loadAvertissements() {
    fetch('http://127.0.0.1:3000/avertissements')
    .then((resp) => resp.json())
    .then((data) => {
      this.alertes = data.avertissements;
    })
    .catch((error) => console.log(error));
  }

  showDetail(id: Number) {
    this.router.navigateByUrl(`/alertes-admin/unique?id=${id}`);
  }

  GotoAjout() {
    this.router.navigateByUrl(`/alertes-admin/ajout`);
  }
}
