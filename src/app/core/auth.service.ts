import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class AuthService {

  private userSubj = new BehaviorSubject<User>(null);
  user$ = this.userSubj.asObservable();

  constructor(private httpClient: HttpClient) {
    const initUser = localStorage.getItem('user');
    this.userSubj.next(initUser ? JSON.parse(initUser) : null);
  }

  login(id = 'alojzy') {
    this.httpClient.get<User>(apiUrl + '/auth/' + id).subscribe(user => {
      this.userSubj.next(user);
      localStorage.setItem('user', JSON.stringify(user));
    });
  }

  logout() {
    this.userSubj.next(null);
    localStorage.removeItem('user');
  }
}
