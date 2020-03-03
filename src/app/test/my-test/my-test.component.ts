import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Test } from '../../models/test.interface';
import { TestService } from '../test.service';
import { Observable, of, from, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { map, tap, filter, share } from 'rxjs/operators';

@Component({
  selector: 'ros-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],

})
export class MyTestComponent implements OnInit, OnDestroy {

  asyncData;
  childCounter: number;
  testData: Observable<any>;
  subscribtion: Subscription;

  testVar: Test = {  test: 'test' };
  constructor(private testService: TestService) {
    this.testService.pushNewState('new state')
    this.subscribtion = this.testService.testState$.subscribe(v => console.log('test state: ' + v))
    this.testData = this.testService.getTestData()
    .pipe(
      // tap(v => console.log(v)),
      filter(v => v.value > 200),
      map(v => v.name));

    // const obs = new Observable((obs) => {
    //   console.log('start emitting')
    //   obs.next(1)
    //   obs.next(2)
    //   obs.error('error!')
    //   obs.next(3)
    //   obs.next(4)
    //   obs.complete()
    // });
    const obs = from([1, 2]);
    // obs.subscribe(v => console.log(v), e => console.log(e), () => console.log('complete'));

    const subj = new Subject();

    subj.next(11)
    // subj.subscribe(v => console.log(v), e => console.log(e), () => console.log('complete'));
    subj.next(31)

    const bsubj = new BehaviorSubject('b1');

    // bsubj.subscribe(v => console.log(v), e => console.log(e), () => console.log('complete'));

    setTimeout(() => {
      this.asyncData = [1,2,3,4]
    }, 2000)
   }

  ngOnInit(): void {
  }
ngOnDestroy() {
  this.subscribtion.unsubscribe();
}

  childUpdateHandler(counter: number) {
    this.childCounter = counter;
  }

  keyupHandler() {

  }
}
