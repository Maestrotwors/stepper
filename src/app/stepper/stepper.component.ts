import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, inject, Output, QueryList, TemplateRef, ViewContainerRef } from '@angular/core';
import { StepDirective } from './directives/step.directive';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements AfterContentInit {
  @ContentChildren(StepDirective) contentChildren!: QueryList<StepDirective>;
  @Output() onStepChanged = new EventEmitter<number>();
  private currentStepIndex = 0;

  private cdr = inject(ChangeDetectorRef);

  ngAfterContentInit(): void {
    this.selectStep(this.currentStepIndex);
  }

  next(): void {
    let selectIndex;
    if (this.currentStepIndex + 1 < this.contentChildren.length) {
      selectIndex = this.currentStepIndex + 1;
    } else {
      selectIndex = 0;
    }

    this.selectStep(selectIndex);
  }

  prev(): void {
    let selectIndex;
    if (this.currentStepIndex === 0) {
      selectIndex = this.contentChildren.length - 1;
    } else {
      selectIndex = this.currentStepIndex - 1;
    }

    this.selectStep(selectIndex);
  }

  selectStep(index: number): void {
    const indexToDelete = this.currentStepIndex;
    const toDelete = this.contentChildren.get(indexToDelete);
    toDelete?.clear();
    this.currentStepIndex = index;
    const currenContent = this.contentChildren.get(index);
    currenContent?.show();
    this.onStepChanged.emit(this.currentStepIndex + 1);
  }
}
