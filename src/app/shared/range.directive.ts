import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[rosRange]'
})
export class RangeDirective implements OnInit {
  @Input() rosRangeDupa;
  constructor(private tempRef: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngOnInit() {
    for (let i = 0; i < this.rosRangeDupa; i++) {
      this.vcr.createEmbeddedView(this.tempRef, {
        $implicit: i + 1,
        double: (i + 1) * 2
      });
    }
  }
}
