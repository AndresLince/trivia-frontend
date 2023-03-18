import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserSignUp } from '../../data-access/user.interfaces';
import { UserService } from '../../data-access/user.service';
import { UserNameValidator } from '../../utils/username.validator';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css'],
})
export class UserCreateFormComponent {
  submitted = false;
  public form = this.formBuilder.group({
    username: [
      '',
      [
        Validators.required,
        UserNameValidator.hasSpace,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]
    ]
  });
  get username() {
    return this.form.get('username');
  }

  constructor(
    public formBuilder: FormBuilder,
    public userService: UserService
  ) { }

  showSubmitButton(): boolean {
    console.log("Es valido: ",this.form.valid);
    console.log("submit", this.submitted)
    console.log("Errores", this.form.get("username")?.errors)
    return !this.form.valid || this.submitted;
  }

  hasErrors(inputName: string) {
    if (this.form.get(inputName)?.errors && this.form.get(inputName)?.dirty) {
      return true;
    }
    return false;
  }

  getErrorMessage(inputName: string): string {
    const errors = this.form.get(inputName)?.errors;
    if (!errors) {
      return '';
    }
    return UserNameValidator.getErrorMessage(errors);
  }

  handleSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    const userModel: UserSignUp = {
      userName: this.form.value.username || '',
      ip: '192.168.10.1',
    };
    this.userService.signUp(userModel).subscribe({
      next(resp) {
        console.log('Current resp: ', resp);
      },
      error(error) {
        console.log('Error: ', error);
      }
    });
  }
}
