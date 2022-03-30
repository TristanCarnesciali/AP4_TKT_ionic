import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username?: string;

  constructor(private authService: AuthService, private storage: Storage, private tokenStorage: TokenStorageService, private router: Router, private AppModule: AppModule) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorage.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  userdata;



  async onSubmit() {
    const { username, password } = this.form;
    this.getuserv2(username);
    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['/missions'])
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  getuserv2(username) {
    fetch(`http://127.0.0.1:3000/getuserv2/${username}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.userdata = data.user[0].id;
        this.setValue(this.userdata);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  setValue(id) {
    this.storage.set("id", id)
  }


  reloadPage(): void {
    window.location.reload();
  }

}
