import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { IonicModule } from '@ionic/angular';

import { TextToSpeechPageRoutingModule } from './text-to-speech-routing.module';

import { TextToSpeechPage } from './text-to-speech.page';
import { ComponentsModule } from 'src/app/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    TextToSpeechPageRoutingModule
  ],
  declarations: [TextToSpeechPage],
  providers: [TextToSpeech]
})
export class TextToSpeechPageModule {}
