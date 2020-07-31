import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AnimationPageRoutingModule } from './animation-routing.module';
import { AnimationPage } from './animation.page';
import { ComponentsModule } from 'src/app/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AnimationPageRoutingModule
  ],
  declarations: [AnimationPage]
})
export class AnimationPageModule {}
