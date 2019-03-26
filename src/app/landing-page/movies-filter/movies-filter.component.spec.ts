import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFilterComponent } from './movies-filter.component';
import { FormsModule } from '@angular/forms';

fdescribe('MoviesFilterComponent', () => {
  let component: MoviesFilterComponent;
  let fixture: ComponentFixture<MoviesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFilterComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('debe generar los 8 items de fecha requeridos', () => {
    component.ngOnInit();

    for (let i = 0; i <= 7; i++) {
      const date: Date = new Date();
      date.setDate(date.getDate() + i);

      expect(component.fechas[i].toDateString()).toEqual(date.toDateString());
    }
  });
});
