import { TestBed } from '@angular/core/testing';

import { SingnalrService } from './singnalr.service';

describe('SingnalrService', () => {
  let service: SingnalrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingnalrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
