import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesVisuaisPageRoutingModule } from './componentes-visuais-routing.module';

import { ComponentesVisuaisPage } from './componentes-visuais.page';
import { ComponentsModule } from 'src/app/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ComponentesVisuaisPageRoutingModule
  ],
  declarations: [ComponentesVisuaisPage]
})
export class ComponentesVisuaisPageModule {}
