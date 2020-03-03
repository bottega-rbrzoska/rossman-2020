import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CounterService } from './counter.service';
import { CONFIG_TOKEN } from '../tokens';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

export function counterServiceFactory() {
  return new CounterService(5);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: CounterService, useFactory: counterServiceFactory },
    { provide: CONFIG_TOKEN,  useValue: { configData: 'blablablaconfig' }, multi: true},
    { provide: CONFIG_TOKEN, useValue: { configData: 'asdasdasd' }, multi: true},
    { provide: CONFIG_TOKEN, useValue: { configData: 'aaaeergthtyjtyj' }, multi: true}
  ]
})
export class CoreModule { }
