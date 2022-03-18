import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-encyclopedie',
  templateUrl: './encyclopedie.page.html',
  styleUrls: ['./encyclopedie.page.scss'],
})
export class EncyclopediePage implements OnInit {

  especes;
  form: any = {
    name: null,
    description: null
  };

  constructor(private router: Router, private formBuilder: FormBuilder) {}

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

  submitForm() {
    const { name, description } = this.form;
    console.log(name);
    console.log(description)
  }
}