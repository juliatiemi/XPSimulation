import { TestBed } from '@angular/core/testing';

import { QuestionListService } from './question-list.service';

describe('QuestionListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionListService = TestBed.get(QuestionListService);
    expect(service).toBeTruthy();
  });
});
