import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Componentes Visuais',
      url: '/componentes-visuais',
      icon: 'folder-open'
    },
    {
      title: 'Componentes Nativos',
      url: '/componentes-nativos',
      icon: 'folder-open'
    },
    {
      title: 'API Externa',
      url: '/api-externa',
      icon: 'folder-open'
    },
    {
      title: 'Nested NgFor',
      url: '/nested-ng-for',
      icon: 'folder-open'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}
}
