import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Navigation2PageRoutingModule } from './navigation2-routing.module';
import { Navigation2Page } from './navigation2.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    Navigation2PageRoutingModule
  ],
  declarations: [Navigation2Page]
})
export class Navigation2PageModule {}
