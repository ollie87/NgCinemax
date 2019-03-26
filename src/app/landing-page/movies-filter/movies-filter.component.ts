import { Component, OnInit } from '@angular/core';
import { create } from 'domain';
declare var $: any;
@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {
  fechas: Date[] = [];
  formFilter = {
    date: new Date()
  };

  constructor() { }

  ngOnInit() {
    $('select').formSelect();
    this.createDates();
  }

  createDates() {
    for (let i = 0; i <= 7; i++) {
      const date: Date = new Date();
      date.setDate(date.getDate() + i);
      this.fechas.push(date);
    }
  }

}
