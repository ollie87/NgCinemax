import { TestBed, getTestBed } from '@angular/core/testing';

import { LandingPageService } from './landing-page.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SocialNetwork } from '../landing-page/navbar-social/social-network';

describe('LandingPageService', () => {
  let service: LandingPageService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
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


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(LandingPageService);
  });

  it('debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Debe llamar el metodo getSocialNetworks y retornar las rede sociales', () => {
    service.getSocialNetworks().subscribe((redes) => {
      expect(redes.length).toBe(4);
      expect(redes).toEqual(mockResponse);
      console.log(redes);
      console.log(mockResponse);
    });

    const req = httpMock.expectOne('https://cinemax-f5dad.firebaseio.com/RedesSociales.json');

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  });
});
