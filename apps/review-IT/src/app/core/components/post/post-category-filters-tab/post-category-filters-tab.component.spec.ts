import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCategoryFiltersTabComponent } from './post-category-filters-tab.component';

describe('PostCategoryFiltersTabComponent', () => {
  let component: PostCategoryFiltersTabComponent;
  let fixture: ComponentFixture<PostCategoryFiltersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCategoryFiltersTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCategoryFiltersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
