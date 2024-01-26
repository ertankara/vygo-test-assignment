import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Message } from 'src/app/interfaces';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
})
export class ChatMessageListComponent implements AfterViewInit {
  @ViewChild(IonContent) content: IonContent | undefined;
  private _messages: Message[] = [];

  constructor() {
    this._messages = [
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Good morning!' },
      { name: 'Jane Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Good morning, what a lovely day!' },
      { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
    ]
  }

  public get messages() {
    return this._messages.reverse();
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
      this.content?.scrollToBottom(200);
    }, 200);
  }

  ngAfterViewInit(): void {
    console.log('content', this.content);
    this.content?.scrollToTop();
    window.scrollTo(0, 0); 
  }
}
