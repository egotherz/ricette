import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaEditaComponent } from './ricetta-edita.component';

describe('RicettaEditaComponent', () => {
  let component: RicettaEditaComponent;
  let fixture: ComponentFixture<RicettaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicettaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
