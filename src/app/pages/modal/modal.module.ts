import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ComponentsModule } from 'src/app/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ModalPageRoutingModule
  ],
  declarations: [ModalPage, ModalComponent],
  entryComponents: [ModalComponent]
})
export class ModalPageModule {}
