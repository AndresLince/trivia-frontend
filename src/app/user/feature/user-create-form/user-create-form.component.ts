import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css']
})
export class UserCreateFormComponent {
  submitted = false;
  public form = this.formBuilder.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]
    ]
  });
  constructor(public formBuilder: FormBuilder) {}
  showSubmitButton(): boolean {
    return !this.form.valid || this.submitted
  }
}
