import { Component } from '@angular/core';
import { Message } from 'src/app/interfaces';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
})
export class ChatMessageListComponent {
  private _messages: Message[] = [];

  constructor() {
    this._messages = []
  }

  public get messages() {
    return this._messages.reverse();
  }

  onMessage(newMessage: string) {
    // TODO: Send message to Firebase collection
    this._messages.push({
      name: 'Ertan Kara',
      avatar: 'https://picsum.photos/80/80?random=2',
      date: new Date().toISOString(),
      message: newMessage,
    })
  }

  loadMessages(...arg: any) {
    // Load older messages
  }
}
