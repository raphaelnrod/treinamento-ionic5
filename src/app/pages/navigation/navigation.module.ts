import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationPageRoutingModule } from './navigation-routing.module';
import { NavigationPage } from './navigation.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NavigationPageRoutingModule
  ],
  declarations: [NavigationPage]
})
export class NavigationPageModule {}
