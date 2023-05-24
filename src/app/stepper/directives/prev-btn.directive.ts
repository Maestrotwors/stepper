import { ContentChild, Directive, HostListener, inject } from '@angular/core';
import { StepperComponent } from '../stepper.component';

@Directive({
  selector: '[appPrevBtn]',
})
export class PrevBtnDirective {
  private stepperComponent = inject(StepperComponent);
  @ContentChild(PrevBtnDirective) contentChild!: PrevBtnDirective;

  @HostListener('click', ['$event']) onClick() {
    this.stepperComponent.prev();
  }

  prev() {
    this.stepperComponent.prev();
  }
}