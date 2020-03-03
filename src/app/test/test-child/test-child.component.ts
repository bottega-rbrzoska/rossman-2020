import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ros-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.scss']
})
export class TestChildComponent implements OnInit {

  uppercaseTestData = '';
  private counter = 0;
  @Output() childUpdate = new EventEmitter<number>();
  @Input()
  set childInput(val: { test: string }) {
    // console.log(val)
    this.uppercaseTestData = val.test.toUpperCase();
  }

  @Input() bgColor = 'transparent';
  constructor() { }

  ngOnInit(): void {
    // console.log('on init: ' + this.uppercaseTestData)
  }

  handleCounterClick() {
    this.counter++;
    this.childUpdate.emit(this.counter);

  }


}
