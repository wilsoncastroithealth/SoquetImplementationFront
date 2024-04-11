import { TestBed } from '@angular/core/testing';

import { Sign2Service } from './sign2.service';

describe('Sign2Service', () => {
  let service: Sign2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sign2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
