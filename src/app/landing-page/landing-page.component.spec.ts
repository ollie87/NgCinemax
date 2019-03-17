import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { NavbarSocialComponent } from './navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { SlidesComponent } from './slides/slides.component';
import { WeeklyBilboardsComponent } from './weekly-bilboards/weekly-bilboards.component';
import { PremieresComponent } from './premieres/premieres.component';
import { CarouselComponent } from './carousel/carousel.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageComponent,
        NavbarSocialComponent,
        NavbarMenuComponent,
        MoviesFilterComponent,
        SlidesComponent,
        WeeklyBilboardsComponent,
        PremieresComponent,
        CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
