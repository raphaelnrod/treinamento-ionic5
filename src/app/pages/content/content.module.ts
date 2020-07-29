import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContentPageRoutingModule } from './content-routing.module';
import { ContentPage } from './content.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ContentPageRoutingModule
  ],
  declarations: [ContentPage]
})
export class ContentPageModule {}
