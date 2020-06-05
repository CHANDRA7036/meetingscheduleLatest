import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloeventtypeComponent } from './soloeventtype.component';

describe('SoloeventtypeComponent', () => {
  let component: SoloeventtypeComponent;
  let fixture: ComponentFixture<SoloeventtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloeventtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloeventtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
