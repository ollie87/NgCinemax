import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarSocialComponent } from './landing-page/navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './landing-page/movies-filter/movies-filter.component';
import { SlidesComponent } from './landing-page/slides/slides.component';
import { WeeklyBilboardsComponent } from './landing-page/weekly-bilboards/weekly-bilboards.component';
import { PremieresComponent } from './landing-page/premieres/premieres.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LandingPageComponent,
        NavbarSocialComponent,
        NavbarMenuComponent,
        MoviesFilterComponent,
        SlidesComponent,
        WeeklyBilboardsComponent,
        PremieresComponent,
        CarouselComponent
      ],
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
