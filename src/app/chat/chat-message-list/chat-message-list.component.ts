import { Component } from '@angular/core';
import { Message } from 'src/app/interfaces';
import { Firestore, collection, addDoc, collectionData, query, orderBy, CollectionReference } from '@angular/fire/firestore'
import { Observable, delay, map } from 'rxjs';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
})
export class ChatMessageListComponent {
  messages$: Observable<Message[]>;
  isEmpty$: Observable<boolean>;
  messagesCollection: CollectionReference = collection(this.firestore, 'messages');

  constructor(private firestore: Firestore) {
    const orderedMessages = query(this.messagesCollection, orderBy('date', 'asc'));
    this.messages$ = collectionData(orderedMessages).pipe() as Observable<Message[]>
    this.isEmpty$ = this.messages$.pipe(map(messages => messages.length === 0));
  }

  onMessage(newMessage: string) {
    if (!newMessage) {
      return;
    }

    addDoc(this.messagesCollection, <Message>{
      name: 'Ertan Kara',
      email: 'kara.ertan9@gmail.com',
      avatar: 'https://picsum.photos/80/80?random=2',
      date: { seconds: new Date().getTime() / 1000 },
      message: newMessage,
    });
  };

  loadMessages(...arg: any) {
    // Load older messages
  }
}
