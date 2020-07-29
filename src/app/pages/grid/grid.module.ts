import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GridPageRoutingModule } from './grid-routing.module';
import { GridPage } from './grid.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    GridPageRoutingModule
  ],
  declarations: [GridPage]
})
export class GridPageModule {}
