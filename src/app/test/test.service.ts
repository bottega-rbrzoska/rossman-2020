import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;
@Injectable()
export class TestService {

  private testStateSubj = new BehaviorSubject(0);

  testState$ = this.testStateSubj.asObservable();

  constructor(private http: HttpClient) { }

  getTestData() {
    return this.http.get<any>(apiUrl + '/test');
  }

  pushNewState(state) {
    this.testStateSubj.next(state);
  }

  pushDefaultState() {

    this.testStateSubj.next(0);
  }

  pushHttpState() {
    this.http.get<any>(apiUrl + '/test').subscribe(v => this.testStateSubj.next(v));
  }
}
