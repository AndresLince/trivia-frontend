import { Component } from '@angular/core';
import { Answer } from '../../data-access/answer.interface';
import { Question } from '../../data-access/question.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { TriviaService } from '../../data-access/trivia.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  public form = this.formBuilder.group({
    selectedAnswer: [
      '',
      [
        Validators.required
      ]
    ]
  });

  public answers: Answer[] = [];
  public question: Question;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private triviaService: TriviaService
  ) {
    this.triviaService.getQuestion().subscribe(response => {
      this.question = {
        description: response.data.description,
        idQuestion: response.data.idQuestion,
        idQuestionCategory: '1'
      };
      this.answers = response.data.answers;
    });
    this.question = {
      description: '...',
      idQuestion: '1',
      idQuestionCategory: '1'
    };
  }

  handleSubmit() {
    this.submitted = true;
    console.log(this.form.value);
  }

  showSubmitButton() {
    return !this.form.valid || this.submitted;
  }
}
