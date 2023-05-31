import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  form = new FormGroup({
      currentStep: new FormControl(0),
      currentStepInput: new FormControl(0),
  });

  ngOnInit() {
    this.form.controls.currentStep.valueChanges.subscribe(data => {
      this.form.controls.currentStepInput.setValue(data, { emitEvent: false });
    });

    this.form.controls.currentStepInput.valueChanges.subscribe((data) => {
      this.form.controls.currentStep.setValue(data, { emitEvent: false });
    });
  }

}