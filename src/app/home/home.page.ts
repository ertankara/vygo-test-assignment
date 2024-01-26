import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Message } from '../interfaces';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild(IonContent) content: IonContent | undefined;
  private _messages: Message[] = [];

  public get messages() {
    return this._messages.reverse();
  }

  constructor() {
    this._messages = [
      { name: 'John Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Good morning!' },
      { name: 'Jane Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Good morning, what a lovely day!' },
      { name: 'Mike Doe', avatar: 'https://picsum.photos/80/80?random=1', date: '2024-01-26', message: 'Indeed :)' },
    ]
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
