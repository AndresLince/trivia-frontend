import { Component } from '@angular/core';
import { Answer } from '../../data-access/answer.interface';
import { Question } from '../../data-access/question.interface';
import { FormBuilder, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {
    this.question = {
      description: '¿Cuál fue la principal causa de la Guerra Civil estadounidense?',
      idQuestion: '1',
      idQuestionCategory: '1'
    };
    this.answers = [
      {
        idAnswer: '1',
        description: 'La cuestión de los derechos estatales'
      },
      {
        idAnswer: '2',
        description: 'La abolición de la esclavitud'
      },
      {
        idAnswer: '3',
        description: 'Diferencias económicas entre el Norte y el Sur'
      },
      {
        idAnswer: '4',
        description: 'Desacuerdos políticos sobre aranceles'
      },
    ]
  }

  handleSubmit() {
    this.submitted = true;
    console.log(this.form.value);
  }

  showSubmitButton() {
    return !this.form.valid || this.submitted;
  }
}
