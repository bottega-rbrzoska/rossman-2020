import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ToggleDirective } from './toggle.directive';
import { ShowForAdminDirective } from './show-for-admin.directive';
import { RangeDirective } from './range.directive';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [TestPipe, LoaderComponent,
    ToggleDirective, ShowForAdminDirective,
    RangeDirective, NotificationContainerComponent, NotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [TestPipe, LoaderComponent, ToggleDirective, ShowForAdminDirective,
    RangeDirective, NotificationContainerComponent]
})
export class SharedModule {
static forRoot(): ModuleWithProviders<SharedModule> {
  return {
    ngModule: SharedModule,
    providers: [NotificationService]
  };
}

 }

