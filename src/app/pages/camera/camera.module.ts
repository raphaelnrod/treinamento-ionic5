import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CameraPageRoutingModule } from './camera-routing.module';
import { CameraPage } from './camera.page';
import { ComponentsModule } from 'src/app/components.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CameraPageRoutingModule
  ],
  declarations: [CameraPage],
  providers: [Camera]
})
export class CameraPageModule {}
