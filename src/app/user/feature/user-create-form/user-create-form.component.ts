import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/shared/data-access/utils.service';
import { GetIp } from '../../data-access/getIp.interface';
import { UserSignUp } from '../../data-access/user.interfaces';
import { UserService } from '../../data-access/user.service';
import { UserNameValidator } from '../../utils/username.validator';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.css'],
})
export class UserCreateFormComponent implements OnInit {
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
    public userService: UserService,
    private router: Router,
    public utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.form.controls.username.setValue(this.userService.userName);
  }

  showSubmitButton(): boolean {
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

    this.utilsService.getIPAddress().subscribe((resp: GetIp) => {
      const userModel: UserSignUp = {
        userName: this.form.value.username || '',
        ip: resp.ip,
      };
      const router = this.router;
      this.userService.signUp(userModel).subscribe({
        next() {
          router.navigateByUrl('trivia/category-question');
        },
        error(error) {
          console.log('Error: ', error);
        }
      });
    });
  }
}
