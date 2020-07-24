import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navigation2',
  templateUrl: './navigation2.page.html',
  styleUrls: ['./navigation2.page.scss'],
})
export class Navigation2Page implements OnInit {

  constructor(private navControl : NavController) { }

  ngOnInit() {
  }

  showPageNavigation(){
    this.navControl.navigateForward('navigation')
  }
}
