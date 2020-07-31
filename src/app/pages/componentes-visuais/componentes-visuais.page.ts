import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-visuais',
  templateUrl: './componentes-visuais.page.html',
  styleUrls: ['./componentes-visuais.page.scss'],
})
export class ComponentesVisuaisPage implements OnInit {

  menuCollection : any[] = [];

  constructor(private navControl : NavController) { 

    this.menuCollection = [
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
        icon: 'settings'
      },
      {
        title: 'Slide',
        url: '/slide',
        icon: 'images'
      },
      {
        title: 'Modal',
        url: '/modal',
        icon: 'terminal'
      },
      {
        title: 'Popover',
        url: '/popover',
        icon: 'chatbox'
      },
      {
        title: 'Toast',
        url: '/toast',
        icon: 'receipt'
      },
      {
        title: 'Animation',
        url: '/animation',
        icon: 'bonfire'
      }
    ];

  }

  ngOnInit() {
  }

  showPages(url : string){
    this.navControl.navigateForward(url);
  }

}
