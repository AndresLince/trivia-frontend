import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryQuestionFormRoutingModule } from './category-question-form-routing.module';
import { CategoryQuestionFormComponent } from './category-question-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryQuestionFormComponent
  ],
  imports: [
    CommonModule,
    CategoryQuestionFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CategoryQuestionFormModule { }
