import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicettaCercaComponent } from './ricetta-cerca.component';

describe('RicettaCercaComponent', () => {
  let component: RicettaCercaComponent;
  let fixture: ComponentFixture<RicettaCercaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicettaCercaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicettaCercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
