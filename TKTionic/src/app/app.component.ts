import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  missionList = [
    {
        libelle: ''
    },
    {
        email: ''
    }
];
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
   
  }

}
