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
  meetings:Meetings[];
  
  constructor(private meetingService:MeetingService) {
  };

  ngOnInit(): void {
    this.meetings=this.meetingService.getMeetings();
  }



  // meetingDuration:any;
 // this.meetingDuration={
    //  duration: [
    //   '30 Minute',      
    // ]}

  // this.meetingDuration=[
  //   {duration: '30 Minute' }, 
  //   {duration: '60 Minute' },    
    
  // ]

 isShow=true;
 onClickMeetingDiv(){
   this.isShow=!this.isShow;
 }

}

