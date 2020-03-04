import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from '../test.service';
import { Observable, from, Subject, BehaviorSubject, Subscription, forkJoin } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'ros-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],

})
export class MyTestComponent implements OnInit, OnDestroy {

  childCounter: number;
  testData$: Observable<any>;
  subscribtion: Subscription;

  constructor(private testService: TestService) {

    forkJoin([
      testService.getTestData(),
      testService.getTestData()]).subscribe(data => {
      console.log(data);
    });
    this.subscribtion = this.testService.testState$.subscribe(v => console.log('test state: ' + v));

    this.testData$ = this.testService.getTestData()
    .pipe(
      filter(v => v.value > 200),
      map(v => v.name));

    const obs2$ = from([1, 2]);
    obs2$.subscribe(v => console.log(v), e => console.log(e), () => console.log('complete'));

    const subj = new Subject();

    subj.next(11);
    subj.subscribe(v => console.log(v), e => console.log(e), () => console.log('complete'));
    subj.next(31);

    const bsubj = new BehaviorSubject('b1');
    bsubj.subscribe(v => console.log(v), e => console.log(e), () => console.log('complete'));
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

  childUpdateHandler(counter: number) {
    this.childCounter = counter;
    this.testService.pushNewState('new state');
  }

  keyupHandler() {

  }
}
