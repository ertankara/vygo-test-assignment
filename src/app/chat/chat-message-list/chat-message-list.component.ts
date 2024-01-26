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
    this._messages = [
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Good morning!' },
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=2', date: '2024-01-26', message: 'Good morning!' },
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=3', date: '2024-01-26', message: 'Good morning!' },
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=4', date: '2024-01-26', message: 'Good morning!' },
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=5', date: '2024-01-26', message: 'Good morning!' },
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=6', date: '2024-01-26', message: 'Good morning!' },
      { name: 'Jane Doe', avatar: 'https://picsum.photos/80/80?random=7', date: '2024-01-26', message: 'Good morning, what a lovely day!' },
      { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=8', date: '2024-01-26', message: 'Indeed :)' },
      { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=9', date: '2024-01-26', message: 'Indeed :)' },
      { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=10', date: '2024-01-26', message: 'Indeed :)' },
      { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=11', date: '2024-01-26', message: 'Indeed :)' },
      { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=12', date: '2024-01-26', message: 'Indeed :)' },
    ]
  }

  public get messages() {
    return this._messages.reverse();
  }

  onMessage(newMessage: string) {
    // TODO: Send message to Firebase collection
    console.log('new message', newMessage);
  }

  loadMessages(...arg: any) {
    setTimeout(() => {
      this._messages.push(...[
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
        { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
      ]);
    }, 200);
  }
}
