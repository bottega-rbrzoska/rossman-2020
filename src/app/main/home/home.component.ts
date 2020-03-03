import { Component, OnInit, Inject } from '@angular/core';
import { TestService } from 'src/app/test/test.service';
import { CounterService } from 'src/app/core/counter.service';
import { CONFIG_TOKEN } from 'src/app/tokens';

@Component({
  selector: 'ros-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter: number;
  constructor(private counterService: CounterService, @Inject(CONFIG_TOKEN) private config: any) {
    this.counter = counterService.counterValue;
    console.log(config)
  }

  ngOnInit(): void {
  }

}
