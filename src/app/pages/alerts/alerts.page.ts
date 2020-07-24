import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exemplo de Alert',
      message: 'Esta é uma mensagem do alert',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  async multipleAlert() {
    const alert = await this.alertController.create({
      header: 'Exemplo de Alert com varios botoes',
      message: 'Esta é uma mensagem do alert',
      buttons: ['OK', 'Open Modal', 'Cancelar']
    });
  
    await alert.present();
  }

  async confirm() {
    const alert = await this.alertController.create({
      header: 'Exemplo de alerta de confirm!',
      message: 'Deseja <strong>excluir</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
  }

  async prompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'Email',
          type: 'text',
          placeholder: 'Digite seu e-mail'
        },
        {
          name: 'Senha',
          type: 'password',
          id: 'password2',
          placeholder: 'Digite sua senha'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Entrar',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });

    await alert.present();
  }


}
