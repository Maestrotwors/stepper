import { Directive, HostListener, inject } from '@angular/core';
import { StepperComponent } from '../stepper.component';

@Directive({
  selector: '[appPrevBtn]',
})
export class PrevBtnDirective {
  private stepperComponent = inject(StepperComponent);

  @HostListener('click', ['$event']) onClick() {
    this.stepperComponent.prev();
  }

  prev() {
    this.stepperComponent.prev();
  }
}