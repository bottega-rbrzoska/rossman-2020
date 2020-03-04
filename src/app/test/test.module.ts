import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTestDetailComponent } from './my-test-detail/my-test-detail.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestService } from './test.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MyTestComponent,
    MyTestDetailComponent,
    TestChildComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ],
  providers: [
    TestService
  ]
})
export class TestModule {}
