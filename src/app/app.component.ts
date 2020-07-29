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
      icon: 'cube'
    },
    {
      title: 'Datetime',
      url: '/datetime',
      icon: 'calendar'
    },
    {
      title: 'Fab',
      url: '/fab',
      icon: 'radio-button-on'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'grid'
    },
    {
      title: 'Infinity Scroll',
      url: '/infinity-scroll',
      icon: 'infinite'
    },
    {
      title: 'Progress Bar',
      url: '/progressbar',
      icon: 'barcode'
    },
    {
      title: 'Refresher',
      url: '/refresher',
      icon: 'refresh'
    },
    {
      title: 'Reorder',
      url: '/reorder',
      icon: 'reorder-two'
    },
    {
      title: 'Searchbar',
      url: '/searchbar',
      icon: 'search'
    },
    {
      title: 'Segment',
      url: '/segment',
      icon: 'search'
    },
    {
      title: 'Slide',
      url: '/slide',
      icon: 'search'
    },
    {
      title: 'Modal',
      url: '/modal',
      icon: 'search'
    },
    {
      title: 'Slide',
      url: '/slide',
      icon: 'search'
    },
    {
      title: 'Popover',
      url: '/popover',
      icon: 'search'
    },
    {
      title: 'Slide',
      url: '/slide',
      icon: 'search'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'receipt'
    },
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
