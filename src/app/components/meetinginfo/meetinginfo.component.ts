import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meetinginfo',
  templateUrl: './meetinginfo.component.html',
  styleUrls: ['./meetinginfo.component.css']
})
export class MeetinginfoComponent implements OnInit {

  @Input() selectedDate: any;
  @Input() isDateSelected: any;
  @Input() selectedSlotTime: any;

  meetingDuration: any;

  constructor() { }

  ngOnInit(): void {
  }

  calculateTime($event) {
    this.meetingDuration = $event.slotTime;
  }

}
