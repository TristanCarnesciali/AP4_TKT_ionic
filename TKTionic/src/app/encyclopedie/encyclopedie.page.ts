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
  regimes;
  form: any = {
    name: null,
    description: null
  };
  regime = {
    value: null
  };

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  /**
   * Redirige vers la page encyclopedie/animal avec l'id de l'animal en query
   * @param id L'id de l'animal concerné
   */
  RedirectToUnique(id: Number) {
    this.router.navigateByUrl(`encyclopedie/animal?id=${id}`);
  }

  ngOnInit() {
    fetch('http://127.0.0.1:3000/especes')
    .then((resp) => resp.json())
    .then((data) => {
      this.especes = data.espece; this.fetchRegimes();
    })
    .catch((error) => console.log(error));
  }


  fetchRegimes() {
    fetch('http://127.0.0.1:3000/types')
    .then((resp) => resp.json())
    .then((data) => this.regimes = data.type)
    .catch((error) => console.log(error));
  }

  submitForm() {
    let { name, description } = this.form;
    
    name = name === null ? "" : name;
    description = description === null ? "" : description;
    this.regime.value = this.regime.value === null ? "" : this.regime.value;

    fetch(`http://127.0.0.1:3000/espece/filter?nom=${name}&desc=${description}&regime=${this.regime.value}`)
    .then((resp) => resp.json())
    .then((data) => {
      this.especes = data.espece;
    })
    .catch((error) => console.log(error));
    this.form.name = "";
    this.form.description = "";
    this.form.regime = "";
  }

  /**
   * Appelé quand le radio bouton du filtre est changé, update le champ regime
   * @param event L'event associé au changement
   */
  radioChange(event) {
    this.regime = event.detail;
  }
}