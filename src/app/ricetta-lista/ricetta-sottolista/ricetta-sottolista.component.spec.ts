import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaSottolistaComponent } from './ricetta-sottolista.component';

describe('RicettaSottolistaComponent', () => {
  let component: RicettaSottolistaComponent;
  let fixture: ComponentFixture<RicettaSottolistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicettaSottolistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettaSottolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
