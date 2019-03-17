import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { SocialNetwork } from '../landing-page/navbar-social/social-network';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  apiRedes:string = 'RedesSociales.json';
  constructor(public _http: HttpClient) { }

  getSocialNetworks(): Observable<SocialNetwork[]> {
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`);
  }
}
