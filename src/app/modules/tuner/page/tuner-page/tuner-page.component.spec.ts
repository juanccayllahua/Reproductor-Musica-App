import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunerPageComponent } from './tuner-page.component';

describe('TunerPageComponent', () => {
  let component: TunerPageComponent;
  let fixture: ComponentFixture<TunerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TunerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
