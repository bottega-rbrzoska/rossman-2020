import { Directive, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[rosShowForAdmin]'
})
export class ShowForAdminDirective implements OnInit, OnDestroy {
  subscription;
  constructor(
    private tempRef: TemplateRef<any>,
    private authService: AuthService,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit() {
    this.subscription = this.authService.isAdmin$
    .subscribe(isAdmin => isAdmin ? this.vcr.createEmbeddedView(this.tempRef) : this.vcr.clear())

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
