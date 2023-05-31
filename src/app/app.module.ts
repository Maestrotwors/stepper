import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepDirective } from './stepper/directives/step.directive';
import { NextBtnDirective } from './stepper/directives/next-btn.directive';
import { PrevBtnDirective } from './stepper/directives/prev-btn.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, StepperComponent, StepDirective, StepDirective, NextBtnDirective, PrevBtnDirective],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
