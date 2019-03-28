import { Component, OnInit } from '@angular/core';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-weekly-bilboards',
  templateUrl: './weekly-bilboards.component.html',
  styleUrls: ['./weekly-bilboards.component.css']
})
export class WeeklyBilboardsComponent implements OnInit {
  films: Movie[] = [];
  constructor( public _landingService: LandingPageService) { }

  ngOnInit() {
    this.getWeeklyBilboards();
  }

  getWeeklyBilboards() {
    this._landingService.getMovies().subscribe((films) => {
      this.films = films.filter(film => film.cartelera);
    });

  }
}
