import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class QuestionModule { }
