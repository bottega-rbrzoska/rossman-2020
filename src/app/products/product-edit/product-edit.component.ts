import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ros-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
  }

}
