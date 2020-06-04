import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycalendlyComponent } from './mycalendly.component';

describe('MycalendlyComponent', () => {
  let component: MycalendlyComponent;
  let fixture: ComponentFixture<MycalendlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycalendlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycalendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
