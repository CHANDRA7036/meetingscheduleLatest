import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'protractor';
import { MeetingService } from '../../services/meeting.service';
import { Meetings } from '../../components/meeting/Meetings';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})

export class MeetingComponent implements OnInit {
  calendarUsername: any;
  id: any;
  meetings: any;
  isShow: boolean = true;

  constructor(private meetingService: MeetingService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.calendarUsername = params['calendarUsername'];
    });
  };

  ngOnInit(): void {
    this.meetings = this.meetingService.getMeetingsByName(this.calendarUsername);
  }

  onClickGo(id) {
    this.router.navigate(['/calendar', this.calendarUsername, id]);
  }

  onClickMeetingDiv() {
    this.isShow = !this.isShow;
  }

}

