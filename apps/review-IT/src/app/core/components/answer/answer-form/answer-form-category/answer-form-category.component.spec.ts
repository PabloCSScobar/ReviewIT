import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerFormCategoryComponent } from './answer-form-category.component';

describe('AnswerFormCategoryComponent', () => {
  let component: AnswerFormCategoryComponent;
  let fixture: ComponentFixture<AnswerFormCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AnswerFormCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
