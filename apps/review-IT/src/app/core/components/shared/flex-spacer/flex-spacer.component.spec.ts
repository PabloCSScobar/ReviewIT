import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSpacerComponent } from './flex-spacer.component';

describe('FlexSpacerComponent', () => {
  let component: FlexSpacerComponent;
  let fixture: ComponentFixture<FlexSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexSpacerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlexSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
