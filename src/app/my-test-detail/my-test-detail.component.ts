import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ros-my-test-detail',
  templateUrl: './my-test-detail.component.html',
  styleUrls: ['./my-test-detail.component.scss']
})
export class MyTestDetailComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
