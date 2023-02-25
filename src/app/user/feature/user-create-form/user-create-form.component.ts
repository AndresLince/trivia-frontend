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
  get username() {
    return this.form.get('username');
  }

  constructor(public formBuilder: FormBuilder) {}

  showSubmitButton(): boolean {
    return !this.form.valid || this.submitted;
  }

  hasErrors() {
    if (this.form.get('username')?.errors && this.form.get('username')?.dirty) {
      return true;
    }
    return false;
  }

  getErrorMessage(): string {
    const errors = this.form.get('username')?.errors
    if (!errors) {
      return "";
    }
    if (errors['required']) {
      return "El nombre de usuario debe ser mas largo";
    }
    if (errors['minlength']) {
      return "El nombre de usuario debe ser mas largo";
    }
    if (errors['maxlength']) {
      return "El nombre de usuario debe ser mas corto";
    }
    return "";
  }
}
