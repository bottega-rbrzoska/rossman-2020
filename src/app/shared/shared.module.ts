import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ToggleDirective } from './toggle.directive';

@NgModule({
  declarations: [TestPipe, LoaderComponent, ToggleDirective],
  imports: [
    CommonModule
  ],
  exports: [TestPipe, LoaderComponent, ToggleDirective]
})
export class SharedModule { }
