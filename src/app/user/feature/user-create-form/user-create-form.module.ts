import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreateFormRoutingModule } from './user-create-form-routing.module';
import { UserCreateFormComponent } from './user-create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserCreateFormComponent
  ],
  imports: [
    CommonModule,
    UserCreateFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserCreateFormModule { }
