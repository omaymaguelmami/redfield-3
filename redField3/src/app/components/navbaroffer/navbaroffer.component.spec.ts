import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarofferComponent } from './navbaroffer.component';

describe('NavbarofferComponent', () => {
  let component: NavbarofferComponent;
  let fixture: ComponentFixture<NavbarofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
