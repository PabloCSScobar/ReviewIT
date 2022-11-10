import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListContainerComponent } from './post-list.component';

describe('PostListComponent', () => {
  let component: PostListContainerComponent;
  let fixture: ComponentFixture<PostListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
