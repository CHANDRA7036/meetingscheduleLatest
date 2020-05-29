import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meetinginfo',
  templateUrl: './meetinginfo.component.html',
  styleUrls: ['./meetinginfo.component.css']
})
export class MeetinginfoComponent implements OnInit {


@Input() selectedDate:any;
@Input() isDateSelected:any;
// @Input() durationTime:any;
@Input() selectedSlotTime:any;

  constructor() { }


  ngOnInit(): void {
  }



 

  selectedValue=new Date();


  meetingDuration:any;

  calculateTime($event){
    this.meetingDuration=$event.slotTime;
  }






  

}
