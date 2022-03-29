import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  
  activePageTitle = 'Menu';
  Pages = [
    {
      title: 'Missions',
      url: '/missions',
      icon: 'checkbox-outline'
    },
    {
      title: 'Encyclopédie',
      url: '/encyclopedie',
      icon: 'book-outline'
    },
    {
      title: 'Animaux',
      url: '/animaux',
      icon: 'paw-outline'
    },
    {
      title: 'Alertes',
      url: '/alertes',
      icon: 'alert'
    },
    {
      title: 'Comptes',
      url: '/comptes',
      icon: 'person'
    }
  ];
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
