import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ros-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],

})
export class MyTestComponent implements OnInit {

  asyncData;
  childCounter: number;
  testVar = {  test: 'test' };
  constructor() {
    setTimeout(() => {
      this.asyncData = [1,2,3,4]
    }, 2000)
   }

  ngOnInit(): void {
  }
  childUpdateHandler(counter: number) {
    this.childCounter = counter;
  }

  keyupHandler() {

  }
}
