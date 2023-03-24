import { Component, OnInit } from '@angular/core';
import { CategoryQuestionService } from '../../data-access/category-question.service';

@Component({
  selector: 'app-category-question-form',
  templateUrl: './category-question-form.component.html',
  styleUrls: ['./category-question-form.component.css']
})
export class CategoryQuestionFormComponent implements OnInit {
  questionCategories = [];

  constructor(
    private categoryQuestionService: CategoryQuestionService
  ) { }

  ngOnInit() {
    this.categoryQuestionService.getAll().subscribe(response => {
      this.questionCategories = response.data;
      console.log(this.questionCategories)
    });
  }
}
