import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent {
  @Output() sent = new EventEmitter<string>();
  message = '';
  
  constructor() {}

  send() {
    this.sent.emit(this.message);
    this.message = '';
  }
}
