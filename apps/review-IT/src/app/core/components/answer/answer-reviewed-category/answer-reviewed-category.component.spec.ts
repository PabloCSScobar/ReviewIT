import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerReviewedCategoryComponent } from './answer-reviewed-category.component';

describe('AnswerReviewedCategoryComponent', () => {
  let component: AnswerReviewedCategoryComponent;
  let fixture: ComponentFixture<AnswerReviewedCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerReviewedCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerReviewedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
