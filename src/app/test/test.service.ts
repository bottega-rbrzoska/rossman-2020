import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TestService {

  private testStateSubj = new BehaviorSubject(0);

  testState$ = this.testStateSubj.asObservable();

  constructor(private http: HttpClient) { }

  getTestData() {
    return this.http.get<any>('http://localhost.test:3000/test')
  }

  pushNewState(state) {
    this.testStateSubj.next(state)
  }

  pushDefaultState() {

    this.testStateSubj.next(0)
  }

  pushHttpState() {
    this.http.get<any>('http://localhost.test:3000/test').subscribe(v => this.testStateSubj.next(v))
  }
}
