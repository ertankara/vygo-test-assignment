import { Component } from '@angular/core';
import { Message } from 'src/app/interfaces';
import { Firestore, collection, addDoc, collectionData, query, orderBy, CollectionReference } from '@angular/fire/firestore'
import { Observable, delay, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss'],
})
export class ChatMessageListComponent {
  messages$: Observable<Message[]>;
  isEmpty$: Observable<boolean>;
  messagesCollection: CollectionReference = collection(this.firestore, 'messages');
  selfEmail: string | undefined;

  constructor(private firestore: Firestore, private authService: AuthService) {
    const orderedMessages = query(this.messagesCollection, orderBy('date', 'asc'));
    this.messages$ = collectionData(orderedMessages).pipe() as Observable<Message[]>
    this.isEmpty$ = this.messages$.pipe(map(messages => messages.length === 0));
    this.selfEmail = this.authService.user?.email ?? undefined;
  }

  onMessage(newMessage: string) {
    if (!newMessage) {
      return;
    }

    addDoc(this.messagesCollection, <Message>{
      name: this.authService.user?.displayName,
      email: this.authService.user?.email,
      avatar: this.authService.user?.photoURL,
      date: { seconds: new Date().getTime() / 1000 },
      message: newMessage,
    });
  };

  loadMessages(...arg: any) {
    // Load older messages
  }
}
