import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBilboardsComponent } from './weekly-bilboards.component';

describe('WeeklyBilboardsComponent', () => {
  let component: WeeklyBilboardsComponent;
  let fixture: ComponentFixture<WeeklyBilboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyBilboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBilboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
