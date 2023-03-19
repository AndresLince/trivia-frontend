import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryQuestionFormComponent } from './category-question-form.component';

describe('CategoryQuestionFormComponent', () => {
  let component: CategoryQuestionFormComponent;
  let fixture: ComponentFixture<CategoryQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryQuestionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
