import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryQuestionService } from '../../data-access/category-question.service';
import { QuestionCategory } from '../../data-access/questionCategory.interface';
import { TriviaService } from '../../data-access/trivia.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/data-access/user.service';

@Component({
  selector: 'app-category-question-form',
  templateUrl: './category-question-form.component.html',
  styleUrls: ['./category-question-form.component.css']
})
export class CategoryQuestionFormComponent implements OnInit {
  public form = this.formBuilder.group({
    idQuestionCategory: [
      '',
      [
        Validators.required,
      ]
    ]
  });
  submitted = false;
  questionCategories: QuestionCategory[] = [];

  constructor(
    private categoryQuestionService: CategoryQuestionService,
    private formBuilder: FormBuilder,
    private triviaService: TriviaService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.categoryQuestionService.getAll().subscribe(response => {
      this.questionCategories = response.data;
      console.log(this.questionCategories)
    });
  }

  handleSubmit() {
    if (!this.form.valid) {
      return;
    }
    const questionCategory: QuestionCategory = {
      idQuestionCategory: this.form.value.idQuestionCategory || '',
      name: '',
    };
    const router = this.router;
    this.triviaService.create(questionCategory).subscribe({
      next: () => {
        this.router.navigateByUrl('trivia/question');
      },
      error: (error) => {
        if (error.status === 500) {
          this.userService.setToken('');
          this.router.navigateByUrl('user/register');
        }
      }
    });
  }

  showSubmitButton(): boolean {
    return !this.form.valid || this.submitted;
  }
}
