import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'category-question',
    loadChildren: () => import('../category-question-form/category-question-form.module').then(m => m.CategoryQuestionFormModule)
  },
  {
    path: 'question',
    loadChildren: () => import('../question/question.module').then(m => m.QuestionModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TriviaShellRoutingModule { }
