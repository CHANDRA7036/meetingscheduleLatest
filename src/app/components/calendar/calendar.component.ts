import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  

  ngOnInit(): void {
  }
  // onValueChange(value: Date): void {
  //   console.log(`Current value: ${value}`);
  // }
  // onPanelChange(change: { date: Date; mode: string }): void {
  //   console.log(`Current value: ${change.date}`);
  //   console.log(`Current mode: ${change.mode}`);
  // }

  // selectedValue="";
  // onDateSelect():boolean{
  //   if(Object.keys(this.selectedValue).length==0){
  //     return true;
  //   }else return false;
  // }


  timeSlots:any;
  constructor() { 

    this.timeSlots={
        slotButtons:[
          '9.00AM','9.15AM','9.30AM','9.45AM','10.00AM','10.15AM','10.30AM',
          '10.45AM','11.00AM','11.15AM','11.30AM','11.45AM','12.00PM','12.15PM',
          '12.30PM','12.45PM','1.00PM','1.15PM','1.30PM','1.45PM','2.00PM','2.15PM',
          '2.30PM','2.45PM','3.00PM','3.15PM','3.30PM','3.45PM','4.00PM','4.15PM','4.30PM'
        ],
        confirmBtnDisplay:[false,false,false,false,false,false,false,false,false,false,
          false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    }

  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }
  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }

//  isShow=true;
//  onClickMeetingDiv(){
//    this.isShow=!this.isShow;
//  }

 isDisplay=false;
onClickCalendar(){
  this.isDisplay=true;
}

 isSlotDisplay=false;
onClickSlot(){
  this.isSlotDisplay=!this.isSlotDisplay;
}

isFormDisplay=false;
checkFormDispaylayed(){
  this.isFormDisplay=!this.isFormDisplay;
}

// isFormDisplay=false;
// confirmClick(){
//   this.isFormDisplay=!this.isFormDisplay;
// }

isGuestEmailsDisplay=false;
guestEmailsClick(){
  this.isGuestEmailsDisplay=!this.isGuestEmailsDisplay;
}

// time = document.getElementsByClassName('active');

selectedValue=new Date();


}
