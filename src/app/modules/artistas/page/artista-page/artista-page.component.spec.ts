import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaPageComponent } from './artista-page.component';

describe('ArtistaPageComponent', () => {
  let component: ArtistaPageComponent;
  let fixture: ComponentFixture<ArtistaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
