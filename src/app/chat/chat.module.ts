import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatMessageListComponent } from './chat-message-list/chat-message-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ChatInputComponent,
    ChatMessageListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ChatMessageListComponent],
})
export class ChatModule { }
