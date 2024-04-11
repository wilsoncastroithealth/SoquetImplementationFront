import { TestBed } from '@angular/core/testing';

import { Sign1Service } from './sign1.service';

describe('Sign1Service', () => {
  let service: Sign1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sign1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
