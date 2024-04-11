import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sign2Component } from './sign2.component';

describe('Sign2Component', () => {
  let component: Sign2Component;
  let fixture: ComponentFixture<Sign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sign2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
