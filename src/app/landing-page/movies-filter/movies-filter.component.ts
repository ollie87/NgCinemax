import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { LandingPageService } from 'src/app/services/landing-page.service';
declare var $: any;
@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {
  fechas: Date[] = [];
  formFilter = {
    date: new Date(),
  };
  films: Movie[] = [];

  constructor( public _landingService: LandingPageService ) { }

  ngOnInit() {
    $('select').formSelect();
    this.createDates();
    this.getBilboards();
  }

  createDates() {
    for (let i = 0; i <= 7; i++) {
      const date: Date = new Date();
      date.setDate(date.getDate() + i);
      this.fechas.push(date);
    }
  }

  getBilboards() {
    this._landingService.getMovies().subscribe((films) => {
      this.films = films.filter(film => film.cartelera);
    });
  }

}
