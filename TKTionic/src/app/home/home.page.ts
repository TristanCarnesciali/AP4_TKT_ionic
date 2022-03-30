import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MenuController } from '@ionic/angular';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  // dataUser: any = [];
  // id = this.actRoute.snapshot.params['id'];

  constructor(public auth: AuthService, private tokenStorage: TokenStorageService, private actRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.auth.getUser(this.id).subscribe((data: {}) => {
    //   this.dataUser = data;
    //   console.log(this.dataUser)
    // })
  }


}
