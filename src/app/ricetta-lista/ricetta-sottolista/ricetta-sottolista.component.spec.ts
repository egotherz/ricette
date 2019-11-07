import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaSottoListaComponent } from './ricetta-sottolista.component';

describe('RicettaSottolistaComponent', () => {
  let component: RicettaSottoListaComponent;
  let fixture: ComponentFixture<RicettaSottoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicettaSottoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettaSottoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
