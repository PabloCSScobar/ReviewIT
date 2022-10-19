import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRankComponent } from './star-rank.component';

describe('StarRankComponent', () => {
  let component: StarRankComponent;
  let fixture: ComponentFixture<StarRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StarRankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
