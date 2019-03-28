import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-premieres',
  templateUrl: './premieres.component.html',
  styleUrls: ['./premieres.component.css']
})
export class PremieresComponent implements OnInit {
  films: Movie[] = [];
  constructor(  public _landingService: LandingPageService ) { }

  ngOnInit() {
    this.getPremieres();
  }

  getPremieres() {
    this._landingService.getMovies().subscribe((films) => {
      this.films = films.filter(film => !film.cartelera);
    });

  }

}
