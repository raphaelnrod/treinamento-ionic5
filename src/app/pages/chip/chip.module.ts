import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChipPageRoutingModule } from './chip-routing.module';
import { ChipPage } from './chip.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ChipPageRoutingModule
  ],
  declarations: [ChipPage]
})
export class ChipPageModule {}
