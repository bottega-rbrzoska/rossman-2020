import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [TestPipe, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [TestPipe, LoaderComponent]
})
export class SharedModule { }
