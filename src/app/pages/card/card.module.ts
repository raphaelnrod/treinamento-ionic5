import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardPageRoutingModule } from './card-routing.module';
import { CardPage } from './card.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CardPageRoutingModule
  ],
  declarations: [CardPage]
})
export class CardPageModule {}
