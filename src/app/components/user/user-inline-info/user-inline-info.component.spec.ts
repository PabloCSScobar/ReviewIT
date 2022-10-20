import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInlineInfoComponent } from './user-inline-info.component';

describe('UserInlineInfoComponent', () => {
  let component: UserInlineInfoComponent;
  let fixture: ComponentFixture<UserInlineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserInlineInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInlineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
