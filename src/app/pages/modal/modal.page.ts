import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    let modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {nome: 'Teste'}
    });
    return await modal.present();
  }


}
