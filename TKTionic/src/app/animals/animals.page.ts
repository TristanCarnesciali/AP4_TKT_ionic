import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})

export class AnimalsPage implements OnInit {

  dataAnimals: any = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAllAnimals().subscribe((data: any) =>{
      this.dataAnimals = data.animal;
      console.log(this.dataAnimals);
    })  
  }

}
