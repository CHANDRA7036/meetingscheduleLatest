import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'protractor';
import { MeetingService } from '../../services/meeting.service'
import { Meetings } from '../../components/meeting/Meetings';


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})

export class MeetingComponent implements OnInit {
  public meetings: any;
  public calendarRoutes1:any;
  public isShow:boolean = true;


  constructor(private meetingService: MeetingService) {
  };

  ngOnInit(): void {

    this.meetings = this.meetingService.getMeetings();
    this.calendarRoutes1=this.meetingService.onTap();
    
  }

  onClickMeetingDiv() {
    this.isShow = !this.isShow;
  }

}

