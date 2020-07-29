import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {
  }

  async openPopover(ev: any) {
    const popover = await this.popover.create({
      component: PopoverComponent,
      event: ev,
      translucent: false
    });
  
    await popover.present();
  }

}
