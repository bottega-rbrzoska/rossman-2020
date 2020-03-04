import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ros-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Output() closeMessage = new EventEmitter();
  message: any;
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.closeMessage.emit();
  }

}
