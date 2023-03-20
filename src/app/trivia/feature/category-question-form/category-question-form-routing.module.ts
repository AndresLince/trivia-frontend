import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryQuestionFormComponent } from './category-question-form.component';

const routes: Routes = [
  {
    path: '', component: CategoryQuestionFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryQuestionFormRoutingModule { }
