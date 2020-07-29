import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BadgePageRoutingModule } from './badge-routing.module';
import { BadgePage } from './badge.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BadgePageRoutingModule
  ],
  declarations: [BadgePage]
})
export class BadgePageModule {}
