import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryQuestionService } from '../../data-access/category-question.service';
import { QuestionCategory } from '../../data-access/questionCategory.interface';
import { TriviaService } from '../../data-access/trivia.service';
import { Router } from '@angular/router';

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
      next() {
        router.navigateByUrl('trivia/question');
      },
      error(error) {
        console.log('Error: ', error);
      }
    });
  }

  showSubmitButton(): boolean {
    return !this.form.valid || this.submitted;
  }
}
