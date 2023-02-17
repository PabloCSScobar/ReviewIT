import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnswersAmountComponent } from './post-answers-amount.component';

describe('PostAnswersAmountComponent', () => {
  let component: PostAnswersAmountComponent;
  let fixture: ComponentFixture<PostAnswersAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAnswersAmountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostAnswersAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
