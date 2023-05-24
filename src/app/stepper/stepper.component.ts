import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, inject, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StepDirective } from './directives/step.directive';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepDirective) contentChildren!: QueryList<StepDirective>;

  private stepsCount = 0;
  private currentStepIndex = 0;

  private cdr = inject(ChangeDetectorRef);

  private renderContent(): void {
    this.contentChildren.forEach(content => {
      content.clear();
    });
    const currenContent = this.contentChildren.get(this.currentStepIndex);
    currenContent?.show();
    this.cdr.detectChanges();
  }

  ngAfterContentInit(): void {
    this.stepsCount = this.contentChildren.reduce((acc) => {
      return ++acc;
    }, 0);
    this.renderContent();
  }

  next(): void {
    if (this.currentStepIndex + 1 < this.stepsCount) {
      this.currentStepIndex = this.currentStepIndex + 1;
      this.renderContent();
    }
  }

  prev(): void {
    alert(this.currentStepIndex);
    if (this.currentStepIndex !== 0) {
      this.currentStepIndex = this.currentStepIndex - 1;
      this.renderContent();
    }
  }

  selectStep(index: number): void {}

  onStepChanged(): void {}
}
