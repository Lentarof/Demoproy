import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasCasasComponent } from './nuestras-casas.component';

describe('NuestrasCasasComponent', () => {
  let component: NuestrasCasasComponent;
  let fixture: ComponentFixture<NuestrasCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrasCasasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrasCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
