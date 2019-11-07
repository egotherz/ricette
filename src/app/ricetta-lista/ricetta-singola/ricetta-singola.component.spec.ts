import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaSingolaComponent } from './ricetta-singola.component';

describe('RicettaSingolaComponent', () => {
  let component: RicettaSingolaComponent;
  let fixture: ComponentFixture<RicettaSingolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicettaSingolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettaSingolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
