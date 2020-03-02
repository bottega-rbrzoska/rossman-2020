import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ros-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],

})
export class MyTestComponent implements OnInit {

  childCounter: number;
  testVar = {  test: 'test' };
  constructor() { }

  ngOnInit(): void {
  }
  childUpdateHandler(counter: number) {
    this.childCounter = counter;
  }

  keyupHandler() {

  }
}
