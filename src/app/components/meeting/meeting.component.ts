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
  id:any;
  meetings: any;
  isShow: boolean = true;


  constructor(private meetingService: MeetingService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.calendarUsername = params['calendarUsername'];
    });
    
  };

  ngOnInit(): void {
    //  this.router.navigate('/calendarUsername');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    this.meetings = this.meetingService.getMeetingsByName(this.calendarUsername);
    // this.calendarRoutes1=this.meetingService.onTap();

  }

  onClickGo(id){
    alert (id);
   
    this.router.navigate(['/calendar',this.calendarUsername,id]);

  }

  onClickMeetingDiv() {
    this.isShow = !this.isShow;
   
  }

  // onMeetings(id: number) {
  //   this.router.navigate(['id', id]); (1)
  // }

  // doSearch(term: string) {
  //   // this.loading = true;
  //   // this.itunes.search(term).then(_ => (this.loading = false));
  // }



}

