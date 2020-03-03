import { Injectable } from '@angular/core';

export class CounterService {

  private counter;

  get counterValue() {
    return this.counter;
  }

  constructor(initValue?: number) {
    this.counter = initValue || 0;
  }

}
