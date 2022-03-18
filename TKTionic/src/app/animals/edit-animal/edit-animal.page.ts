import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.page.html',
  styleUrls: ['./edit-animal.page.scss'],
})

export class EditAnimalPage implements OnInit {
  dataAnimal: any = [];
  dataAnimalSante: any = [];
  id = this.actRoute.snapshot.params['id'];
  ionicForm: FormGroup;
  
  constructor(private actRoute: ActivatedRoute, private formBuilder: FormBuilder, public router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.getAnimal(this.id).subscribe((data: {}) => {
      this.dataAnimal = data;
      console.log(this.dataAnimal);
    })
    this.auth.getSanteAnimal(this.id).subscribe((data: {}) => {
      this.dataAnimalSante = data;
      console.log(this.dataAnimalSante)
    })

    this.ionicForm = this.formBuilder.group({
      etat: ['', [Validators.required]],
      idAnimal: [this.dataAnimal.id],
    })
 }

  modifierAnimal() {
    if(window.confirm("Voulez-vous modifier la santé de l'animal ?")) {
      this.auth.updateAnimalSante(this.dataAnimalSante.idAnimal, this.dataAnimal.etat, this.id).subscribe(data => {
        console.log(this.ionicForm.value);
      })
    }
  }
}
