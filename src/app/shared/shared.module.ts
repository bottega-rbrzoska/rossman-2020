import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';

@NgModule({
  declarations: [TestPipe],
  imports: [
    CommonModule
  ],
  exports: [TestPipe]
})
export class SharedModule { }
