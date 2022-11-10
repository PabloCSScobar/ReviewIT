import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFiltersBarComponent } from './post-filters-bar.component';

describe('PostFiltersBarComponent', () => {
  let component: PostFiltersBarComponent;
  let fixture: ComponentFixture<PostFiltersBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PostFiltersBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFiltersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
