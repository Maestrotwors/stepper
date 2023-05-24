import { AfterContentInit, ContentChild, Directive, HostListener, inject } from '@angular/core';
import { StepperComponent } from '../stepper.component';

@Directive({
  selector: '[appNextBtn]',
})
export class NextBtnDirective {
  private stepperComponent = inject(StepperComponent);
  @ContentChild(NextBtnDirective) contentChild!: NextBtnDirective;

  @HostListener('click', ['$event']) onClick() {
    this.stepperComponent.next();
  }
}
