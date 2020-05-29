import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetinginfoComponent } from './meetinginfo.component';

describe('MeetinginfoComponent', () => {
  let component: MeetinginfoComponent;
  let fixture: ComponentFixture<MeetinginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetinginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
