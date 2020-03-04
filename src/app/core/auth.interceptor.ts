import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newReq = request;
    if (this.authService.isLoggedIn) {
      newReq  = request.clone({
        headers: new HttpHeaders({ authorization: 'tokenasdfdsjfgodlsfngo;k;rlhmtrlh'})
      });
    }
    return next.handle(newReq);
  }
}
