import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ros-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', this.dupaValidator),

    });
    this.myForm.controls.email.statusChanges.subscribe(status => {
      if (status === 'INVALID'){    console.log(status)
        this.myForm.controls.message.disable()
      } else {
        this.myForm.controls.message.enable()
      }
    })
  }

  ngOnInit(): void {

  }

  handleSubmit() {
    console.log(this.myForm.getRawValue())
  }

  badWordsValidator(words: string[]) {
    //return (control) =>
  }

  dupaValidator(control: AbstractControl) {
    return control.value.includes('dupa') ? { dupaError: true } : null;
  }
}
