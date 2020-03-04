import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of, timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { switchMap, delay } from 'rxjs/operators';

const apiUrl = environment.apiUrl;
@Injectable()
export class TestService {

  private testStateSubj = new BehaviorSubject(0);

  testState$ = this.testStateSubj.asObservable();

  constructor(private http: HttpClient) { }

  getTestData(del = 0) {
    return timer(del).pipe(switchMap( () => this.http.get<any>(apiUrl + '/test'))) ;
  }
  getTestDataWithError() {
    return this.http.get<any>(apiUrl + '/test2');
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
