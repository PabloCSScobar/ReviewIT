import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDetailComponent } from './answer-detail.component';

describe('AnswerDetailComponent', () => {
  let component: AnswerDetailComponent;
  let fixture: ComponentFixture<AnswerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
