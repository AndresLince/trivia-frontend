import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryQuestionFormRoutingModule } from './category-question-form-routing.module';
import { CategoryQuestionFormComponent } from './category-question-form.component';

@NgModule({
  declarations: [
    CategoryQuestionFormComponent
  ],
  imports: [
    CommonModule,
    CategoryQuestionFormRoutingModule
  ]
})
export class CategoryQuestionFormModule { }
