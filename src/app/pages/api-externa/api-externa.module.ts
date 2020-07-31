import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiExternaPageRoutingModule } from './api-externa-routing.module';

import { ApiExternaPage } from './api-externa.page';
import { ComponentsModule } from 'src/app/components.module';
import { NgxMaskIonicModule } from 'ngx-mask-ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NgxMaskIonicModule,
    ApiExternaPageRoutingModule
  ],
  declarations: [ApiExternaPage]
})
export class ApiExternaPageModule {}
