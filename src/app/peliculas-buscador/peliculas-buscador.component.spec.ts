import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasBuscadorComponent } from './peliculas-buscador.component';

describe('PeliculasBuscadorComponent', () => {
  let component: PeliculasBuscadorComponent;
  let fixture: ComponentFixture<PeliculasBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasBuscadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
