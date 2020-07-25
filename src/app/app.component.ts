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
      title: 'Navigation',
      url: '/navigation',
      icon: 'paper-plane'
    },
    {
      title: 'Buttons',
      url: '/buttons',
      icon: 'construct'
    },
    {
      title: 'Alerts',
      url: '/alerts',
      icon: 'alert'
    },
    {
      title: 'Actionsheet',
      url: '/actionsheet',
      icon: 'albums'
    },
    {
      title: 'Badge',
      url: '/badge',
      icon: 'information'
    },
    {
      title: 'Card',
      url: '/card',
      icon: 'card'
    },
    {
      title: 'Checkbox',
      url: '/checkbox',
      icon: 'checkbox'
    },
    {
      title: 'Chip',
      url: '/chip',
      icon: 'hardware-chip'
    },
    {
      title: 'Content',
      url: '/content',
      icon: 'hardware-chip'
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

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
