import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationService {

  private messagesSubj = new Subject();
  messages$ = this.messagesSubj.asObservable();

  pushNotification(msg) {
    this.messagesSubj.next(msg);
  }
}
