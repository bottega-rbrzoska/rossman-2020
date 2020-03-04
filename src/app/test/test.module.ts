import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTestDetailComponent } from './my-test-detail/my-test-detail.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestService } from './test.service';

@NgModule({
  declarations: [
    MyTestComponent,
    MyTestDetailComponent,
    TestChildComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ],
  providers: [
    TestService
  ]
})
export class TestModule {}
