import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ToggleDirective } from './toggle.directive';
import { ShowForAdminDirective } from './show-for-admin.directive';
import { RangeDirective } from './range.directive';

@NgModule({
  declarations: [TestPipe, LoaderComponent, ToggleDirective, ShowForAdminDirective, RangeDirective],
  imports: [
    CommonModule
  ],
  exports: [TestPipe, LoaderComponent, ToggleDirective, ShowForAdminDirective, RangeDirective]
})
export class SharedModule { }

