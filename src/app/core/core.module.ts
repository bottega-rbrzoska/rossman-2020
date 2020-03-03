import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './counter.service';
import { CONFIG_TOKEN } from '../tokens';

export function counterServiceFactory() {
  return new CounterService(5);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: CounterService, useFactory: counterServiceFactory },
    { provide: CONFIG_TOKEN, useValue: { configData: 'blablablaconfig' }, multi:true},
    { provide: CONFIG_TOKEN, useValue: { configData: 'asdasdasd' }, multi:true},
    { provide: CONFIG_TOKEN, useValue: { configData: 'aaaeergthtyjtyj' }, multi:true}
  ]
})
export class CoreModule { }
