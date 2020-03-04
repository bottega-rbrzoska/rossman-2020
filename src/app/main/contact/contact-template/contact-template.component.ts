import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ros-contact-template',
  templateUrl: './contact-template.component.html',
  styleUrls: ['./contact-template.component.scss']
})
export class ContactTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(form: NgForm) {
    console.log(form)
  }

}
