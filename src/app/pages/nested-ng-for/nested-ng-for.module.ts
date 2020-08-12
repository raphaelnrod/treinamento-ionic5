import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NestedNgForPageRoutingModule } from './nested-ng-for-routing.module';

import { NestedNgForPage } from './nested-ng-for.page';
import { ComponentsModule } from 'src/app/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NestedNgForPageRoutingModule
  ],
  declarations: [NestedNgForPage]
})
export class NestedNgForPageModule {}
