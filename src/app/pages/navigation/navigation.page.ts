import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {

  constructor(private navControl : NavController) { }

  ngOnInit() {
  }

  showPageNavigation2(){
    this.navControl.navigateForward('navigation2')
  }

}
