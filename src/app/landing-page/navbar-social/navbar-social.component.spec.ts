import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSocialComponent } from './navbar-social.component';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SocialNetwork } from './social-network';
import { of } from 'rxjs';

describe('NavbarSocialComponent', () => {
  let component: NavbarSocialComponent;
  let fixture: ComponentFixture<NavbarSocialComponent>;
  let service: LandingPageService;
  const mockResponse: SocialNetwork[] = [
    {
      nombre: 'Facebook',
      url: 'https://www.facebook.com/mario.ollie',
      clase: 'fab fa-facebook-f',
      estado: true
    },
    {
      nombre: 'Twitter',
      url: 'https://twitter.com/olliemario',
      clase: 'fab fa-twitter',
      estado: true
    },
    {
      nombre: 'Youtube',
      url: 'https://www.youtube.com/channel/UCYwL090B9kRLmVb0uzdnENg?view_as=subscriber',
      clase: 'fab fa-youtube',
      estado: true,
    },
    {
      nombre: 'Instagram',
      url: 'https://www.instagram.com/?hl=es',
      clase: 'fab fa-instagram',
      estado: true
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSocialComponent ],
      providers: [LandingPageService],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSocialComponent);
    component = fixture.componentInstance;
    service = component._landingService;
    fixture.detectChanges();
  });

  it('Debe ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inyectar LandingPageService', () =>{
    expect(service).toBeTruthy();
  });

  it('Debe llenar la variable socialNetworks al llamar getSocialNetworks de _landingPageService', () => {
    spyOn(service, 'getSocialNetworks').and.returnValue(of(mockResponse));

    component.ngOnInit();
    expect(component.socialNetworks).toEqual(mockResponse);
  });
});
