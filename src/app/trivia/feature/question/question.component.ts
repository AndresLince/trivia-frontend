import { Component } from '@angular/core';
import { Answer } from '../../data-access/answer.interface';
import { Question } from '../../data-access/question.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { TriviaService } from '../../data-access/trivia.service';
import { SetSelectedAnswer } from '../../data-access/set-selected-answer.model';

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
    this.question = {
      description: '...',
      idQuestion: '1',
      idQuestionCategory: '1'
    };
    this.getQuestion();
  }

  handleSubmit() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    const selectedAnswerModel: SetSelectedAnswer = {
      idTrivia: this.triviaService.getIdTrivia(),
      idQuestion: this.question.idQuestion,
      idSelectedAnswer: this.form.value.selectedAnswer || ''
    };
    this.triviaService.setSelectedAnswer(selectedAnswerModel).subscribe(response => {
      this.submitted = false;
      this.getQuestion();
    });
  }

  showSubmitButton() {
    return !this.form.valid || this.submitted;
  }

  getQuestion() {
    this.triviaService.getQuestion().subscribe(response => {
      this.question = {
        description: response.data.description,
        idQuestion: response.data.idQuestion,
        idQuestionCategory: '1'
      };
      this.answers = response.data.answers;
    });
  }
}
