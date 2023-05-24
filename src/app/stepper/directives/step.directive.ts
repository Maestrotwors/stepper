import { Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStep]',
})
export class StepDirective {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  show() {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  clear() {
    this.viewContainer.clear();
  }
}
