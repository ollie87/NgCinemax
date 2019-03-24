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
  constructor(public _http: HttpClient) { }

  getSocialNetworks(): Observable<SocialNetwork[]> {
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`);
  }
  getMovies(): Observable<Movie[]> {
    return this._http.get<Movie[]>(`${environment.API}${this.apiFilms}`);
  }
}
