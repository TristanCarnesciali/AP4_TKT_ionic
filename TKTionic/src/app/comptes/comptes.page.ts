import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.page.html',
  styleUrls: ['./comptes.page.scss'],
})

export class ComptesPage implements OnInit {

  constructor(public authService: AuthService, private router: Router) {}
  
  form = {
    username: null,
    email: null,
    password: null,
    idRole: 1 //1=admin, 2=user
  }

  ngOnInit() {}

  create() {
    this.authService.createUser(this.form.username, this.form.email, this.form.password, this.form.idRole).subscribe((res:any) => {
      console.log("L'admin a bien été crée!");
      window.location.reload();
      this.router.navigateByUrl('home');
    })
  }
}
