import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateFormComponent } from './user-create-form.component';

const routes: Routes = [
  {
    path: '', component: UserCreateFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreateFormRoutingModule { }
