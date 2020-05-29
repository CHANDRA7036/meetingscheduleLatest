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
            {slotTime:'9.00AM' , isActive:false},
            {slotTime:'9.15AM' , isActive:false},
            {slotTime:'9.30AM' , isActive:false},
            {slotTime:'9.45AM' , isActive:false},
            {slotTime:'10.00AM' , isActive:false},
            {slotTime:'10.15AM' , isActive:false},
            {slotTime:'10.30AM' , isActive:false},
            {slotTime:'10.45AM' , isActive:false},
            {slotTime:'11.00AM' , isActive:false},
            {slotTime:'11.15AM' , isActive:false},
            {slotTime:'11.30AM' , isActive:false},
            {slotTime:'11.45AM' , isActive:false},
            {slotTime:'12.00PM' , isActive:false},
            {slotTime:'12.10PM' , isActive:false},
            {slotTime:'12.30PM' , isActive:false},
            {slotTime:'12.45PM' , isActive:false},
            {slotTime:'1.00PM' , isActive:false},
            {slotTime:'1.15PM' , isActive:false},
            {slotTime:'1.30PM' , isActive:false},
            {slotTime:'1.45PM' , isActive:false},
            {slotTime:'2.00PM' , isActive:false},
            {slotTime:'2.15PM' , isActive:false},
            {slotTime:'2.30PM' , isActive:false},
            {slotTime:'2.45PM' , isActive:false},
            {slotTime:'3.00PM' , isActive:false},
            {slotTime:'3.15PM' , isActive:false},
            {slotTime:'3.30PM' , isActive:false},
            {slotTime:'3.45PM' , isActive:false},
            {slotTime:'4.00PM' , isActive:false},
            {slotTime:'4.15PM' , isActive:false},
            {slotTime:'4.30PM' , isActive:false}           
          ]
    }
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }
  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }

  meetingDuration:any;
  calculateTime($event){
    this.meetingDuration=$event.slotTime;
  }

isDetailsFormdisplay:boolean;
onClickConfirmButtonInCalendar($event){
  this.isDetailsFormdisplay=$event;
}
//   disabledDate = (current) =>{         
//     // Can not select days after today and before start Date
//     const start = moment('2020-01-01','YYYY-MM-DD');        
//     return  current< start || current>moment();
// }

  // disabledDate={(current)=>
  //   return [moment().add(-1,'days')]
  // }


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

isGuestEmailsDisplay=false;
guestEmailsClick(){
  this.isGuestEmailsDisplay=!this.isGuestEmailsDisplay;
}

selectedValue=new Date();
}
