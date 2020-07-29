import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlertsPageRoutingModule } from './alerts-routing.module';
import { AlertsPage } from './alerts.page';
import { ComponentsModule} from '../../components.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AlertsPageRoutingModule
  ],
  declarations: [AlertsPage]
})
export class AlertsPageModule {}
