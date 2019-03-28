import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { SocialNetwork } from '../landing-page/navbar-social/social-network';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  apiRedes = 'RedesSociales.json';
  apiFilms = 'Peliculas.json';
  formatos: string[] = [
    'Doblado 2D', 'Doblado 3D', 'Idioma Original 2D', 'Idioma Original 3D'
  ];
  horas: string[] = [];
  constructor(public _http: HttpClient) {
    this.generateHours();
  }

  getSocialNetworks(): Observable<SocialNetwork[]> {
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`);
  }
  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${environment.API}${this.apiFilms}`);
  }

  generateHours() {
    for (let i = 2; i <= 10; i = i + 2) {
      const hora = `${i}:00pm`;
      this.horas.push(hora);
    }
  }
}
