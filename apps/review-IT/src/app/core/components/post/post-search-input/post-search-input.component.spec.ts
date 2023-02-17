import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSearchInputComponent } from './post-search-input.component';

describe('PostSearchInputComponent', () => {
  let component: PostSearchInputComponent;
  let fixture: ComponentFixture<PostSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSearchInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
