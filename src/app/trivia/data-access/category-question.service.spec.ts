import { TestBed } from '@angular/core/testing';

import { CategoryQuestionService } from './category-question.service';

describe('CategoryQuestionService', () => {
  let service: CategoryQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
