import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopoverPageRoutingModule } from './popover-routing.module';
import { PopoverPage } from './popover.page';
import { ComponentsModule } from 'src/app/components.module';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    PopoverPageRoutingModule
  ],
  declarations: [PopoverPage, PopoverComponent],
  entryComponents: [PopoverComponent]
})
export class PopoverPageModule {}
