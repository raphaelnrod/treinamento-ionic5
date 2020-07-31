import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-componentes-nativos',
  templateUrl: './componentes-nativos.page.html',
  styleUrls: ['./componentes-nativos.page.scss'],
})
export class ComponentesNativosPage implements OnInit {

  menuCollection : any[] = [];

  constructor(private navControl : NavController) { 
    this.menuCollection = [
      {
        title: 'Camera',
        url: '/camera',
        icon: 'camera'
      },
      {
        title: 'Text To Speech',
        url: '/text-to-speech',
        icon: 'mic'
      }
    ];
  }

  ngOnInit() {
  }

  showPages(url : string){
    this.navControl.navigateForward(url);
  }
}
