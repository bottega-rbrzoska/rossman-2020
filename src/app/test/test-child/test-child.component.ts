import { Component, OnInit, Input, Output, EventEmitter, Optional, InjectionToken, Inject } from '@angular/core';

export const MyTestComponentToken = new InjectionToken('MyTestComponent');

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
  set childInput(val: string ) {
    this.uppercaseTestData = val.toUpperCase();
  }

  @Input() bgColor = 'transparent';
  constructor(@Inject(MyTestComponentToken) @Optional() private parent: any) {
    if (!this.parent) {
      console.error('Gdzie jest tatooooo MyTestComponent!!!!!');
    }
  }

  ngOnInit(): void {
  }

  helloFromChild() {
    alert('hello mariolka')
  }

  handleCounterClick() {
    this.counter++;
    this.childUpdate.emit(this.counter);

  }


}
