import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarSocialComponent } from './landing-page/navbar-social/navbar-social.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
