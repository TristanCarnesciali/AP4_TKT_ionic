import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encyclopedie',
  templateUrl: './encyclopedie.page.html',
  styleUrls: ['./encyclopedie.page.scss'],
})
export class EncyclopediePage implements OnInit {

  especes;

  constructor(private router: Router) {}

  /**
   * Redirige vers la page encyclopedie/animal avec l'id de l'animal en query
   * @param id L'id de l'animal concerné
   */
  RedirectToUnique(id) {
    this.router.navigateByUrl(`encyclopedie/animal?id=${id}`);
  }

  ngOnInit() {
    fetch('http://127.0.0.1:3000/especes')
    .then((resp) => resp.json())
    .then((data) => {
      this.especes = data.espece; // Espece array
    })
    .catch((error) => {
      console.log(error);
    });
  }
}