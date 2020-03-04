import { Component, OnInit, ViewChild, ViewContainerRef,
  AfterContentInit, ComponentFactory, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'ros-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit, OnDestroy {

  componentFactory: ComponentFactory<NotificationComponent>;
  subscription;
  @ViewChild('notificationContainer', { read: ViewContainerRef, static: true} ) vcr: ViewContainerRef;
  constructor(cfr: ComponentFactoryResolver, private notificationsService: NotificationService) {
    this.componentFactory = cfr.resolveComponentFactory(NotificationComponent);
   }

  ngOnInit(): void {
    this.subscription = this.notificationsService.messages$.subscribe(msg => {
      const component = this.vcr.createComponent(this.componentFactory);
      component.instance.message = msg;
      setTimeout(() => {
        component.destroy();
      }, 4000);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
