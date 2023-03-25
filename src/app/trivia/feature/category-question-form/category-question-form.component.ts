import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserNameValidator } from 'src/app/user/utils/username.validator';
import { CategoryQuestionService } from '../../data-access/category-question.service';
import { QuestionCategory } from '../../data-access/questionCategory.interface';

@Component({
  selector: 'app-category-question-form',
  templateUrl: './category-question-form.component.html',
  styleUrls: ['./category-question-form.component.css']
})
export class CategoryQuestionFormComponent implements OnInit {
  public form = this.formBuilder.group({
    questionCategory: [
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
  ) { }

  ngOnInit() {
    this.categoryQuestionService.getAll().subscribe(response => {
      this.questionCategories = response.data;
      console.log(this.questionCategories)
    });
  }

  handleSubmit() {

  }

  showSubmitButton(): boolean {
    return !this.form.valid || this.submitted;
  }
}
