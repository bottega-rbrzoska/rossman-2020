import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CounterService } from './counter.service';
import { CONFIG_TOKEN } from '../tokens';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { SharedModule } from '../shared/shared.module';

export function counterServiceFactory() {
  return new CounterService(5);
}

export function configInitializer(http: HttpClient) {
  return () => http.get<any>(environment.apiUrl + '/test')
  .pipe(tap(test => console.log(test)))
  .toPromise();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: APP_INITIALIZER, useFactory: configInitializer, multi: true, deps: [HttpClient]},
    { provide: CounterService, useFactory: counterServiceFactory },
    { provide: CONFIG_TOKEN,  useValue: { configData: 'blablablaconfig' }, multi: true},
    { provide: CONFIG_TOKEN, useValue: { configData: 'asdasdasd' }, multi: true},
    { provide: CONFIG_TOKEN, useValue: { configData: 'aaaeergthtyjtyj' }, multi: true}
  ]
})
export class CoreModule { }
