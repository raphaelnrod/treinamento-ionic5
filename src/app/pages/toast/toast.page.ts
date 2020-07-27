import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastController: ToastController) {}

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Exemplo de toast.',
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
