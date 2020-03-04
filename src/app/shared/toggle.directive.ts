import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[rosToggle]',
  exportAs: 'rosToggleVar'
})
export class ToggleDirective implements OnInit, OnDestroy {

  @Input() rosToggle;
  @Input() rosToggleEventType;
  @Input() rosToggleFirstClass;
  @Input() rosToggleSecondClass;
  currentClass;
  unlisten: () => void;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'cursor', 'pointer');
    renderer.setStyle(el.nativeElement, 'display', 'block');
  }

  ngOnInit() {
    this.currentClass = this.currentClass || this.rosToggleFirstClass;
    if (this.rosToggleEventType) {
      this.unlisten = this.renderer.listen(this.el.nativeElement, this.rosToggleEventType, () =>
        this.toggle()
      );
    }
  }

  toggle() {
    this.renderer.removeClass(this.el.nativeElement, this.rosToggleFirstClass);
    this.renderer.removeClass(this.el.nativeElement, this.rosToggleSecondClass);

    this.renderer.addClass(this.el.nativeElement, this.currentClass);
    this.currentClass =
    this.currentClass === this.rosToggleFirstClass ? this.rosToggleSecondClass : this.rosToggleFirstClass;
  }

  ngOnDestroy() {
    if (this.unlisten) {
      this.unlisten();
    }
  }
}
