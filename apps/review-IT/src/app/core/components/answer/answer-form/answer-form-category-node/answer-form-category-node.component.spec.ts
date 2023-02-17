import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerFormCategoryNodeComponent } from './answer-form-category-node.component';

describe('AnswerFormCategoryNodeComponent', () => {
  let component: AnswerFormCategoryNodeComponent;
  let fixture: ComponentFixture<AnswerFormCategoryNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerFormCategoryNodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerFormCategoryNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
