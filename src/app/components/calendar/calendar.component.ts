import { Component, OnInit } from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarUsername: any;
  id: any;
  meetings: any;
  timeSlots: any;
  meetingDuration: any;
  isDetailsFormdisplay: boolean;
  isDisplay = false;
  isSlotDisplay = false;
  isFormDisplay = false;
  isGuestEmailsDisplay = false;
  selectedValue: any;


  eventData: any = {
    date: "",
    time: "",
  }

  ngOnInit(): void {
  }

  constructor(private meetingService: MeetingService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.calendarUsername = params['calendarUsername'];
      this.id = params['id'];
    });
  }

  calculateTime($event) {
    this.meetingDuration = $event.slotTime;
    this.eventData.time = this.meetingDuration;
  }

  onClickConfirmButtonInCalendar($event) {
    this.isDetailsFormdisplay = $event;
    // this.router.navigate(['/calendar', this.calendarUsername, this.id, 'confirm' + this.eventData]);
  }

  onClickCalendar() {
    this.timeSlots = this.meetingService.getSlotsById(this.calendarUsername)[this.id];
    this.isDisplay = true;
    this.eventData.date = this.transform(this.selectedValue);
  }

  transform(value: string) {
    var datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, 'fullDate');
    return value;
  }

  onClickSlot() {
    this.isSlotDisplay = !this.isSlotDisplay;
  }

  checkFormDispaylayed() {
    this.isFormDisplay = !this.isFormDisplay;
  }

}
