import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListViewComponent } from './post-list-view.component';

describe('PostListViewComponent', () => {
  let component: PostListViewComponent;
  let fixture: ComponentFixture<PostListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PostListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
