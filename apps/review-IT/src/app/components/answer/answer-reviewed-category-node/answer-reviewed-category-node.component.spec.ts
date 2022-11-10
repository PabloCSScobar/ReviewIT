import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerReviewedCategoryNodeComponent } from './answer-reviewed-category-node.component';

describe('AnswerReviewedCategoryNodeComponent', () => {
  let component: AnswerReviewedCategoryNodeComponent;
  let fixture: ComponentFixture<AnswerReviewedCategoryNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AnswerReviewedCategoryNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerReviewedCategoryNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
