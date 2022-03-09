import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  missionData: any = [];
  constructor(public authService: AuthService, private actRoute: ActivatedRoute, private menu: MenuController) {}

  ngOnInit() {
    const id = this.actRoute.snapshot.paramMap.get('id');

    this.authService.getAll().subscribe((data: any)=>{
      this.missionData = data.mission;
      console.log(this.missionData);
    })
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
