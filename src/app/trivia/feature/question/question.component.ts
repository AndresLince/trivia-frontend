import { Component } from '@angular/core';
import { Answer } from '../../data-access/answer.interface';
import { Question } from '../../data-access/question.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { TriviaService } from '../../data-access/trivia.service';
import { SetSelectedAnswer } from '../../data-access/set-selected-answer.model';
import { Router } from '@angular/router';

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
  public question: Question = {
    description: '',
    idQuestion: '',
    idQuestionCategory: ''
  };
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private triviaService: TriviaService,
    private router: Router,
  ) {
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
      this.form.reset();
      this.getQuestion();
    });
  }

  showSubmitButton() {
    return !this.form.valid && !this.submitted;
  }

  getQuestion() {
    this.triviaService.getQuestion().subscribe({
        next: (response) => {
          this.question = {
            description: response.data.description,
            idQuestion: response.data.idQuestion,
            idQuestionCategory: '1'
          };
          this.answers = response.data.answers;
        },
        error: (e) => {
          if (e.status === 404) {
            this.router.navigateByUrl('trivia/summary');
          }
          console.log(e);
        },
        complete: () => console.log('complete')
      }
    );
  }
}
