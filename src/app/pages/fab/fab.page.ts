import { Component, OnInit } from '@angular/core';
import { NavController, IonApp } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  private sites : any = ['facebook', 'youtube', 'instagram'];

  constructor() { }

  ngOnInit() {
  }

  open(obj){
    console.log("Abri o " + obj);
  }

}
