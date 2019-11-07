import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaListaComponent } from './ricetta-lista.component';

describe('RicettaListaComponent', () => {
  let component: RicettaListaComponent;
  let fixture: ComponentFixture<RicettaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicettaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
