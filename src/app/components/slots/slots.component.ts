import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  @Input() timeSlots:string;
  @Input() isSlotActive:boolean;
  @Input() allISActives:any;
  @Output() isSlotSelectedAfterChange:EventEmitter<any>=new EventEmitter();
  @Output() selectedTime:EventEmitter<any>=new EventEmitter();
  @Output() formDisplayToggle:EventEmitter<any>=new EventEmitter();

  calendarUsername: any;
  ngOnInit(): void {


  }

  constructor() {  
    
  }

 

dateSlotSelected(){
  this.selectedTime.emit({slotTime:this.timeSlots});  
}

  onClickSlot(){
    this.isSlotActive=!this.isSlotActive;

    for (let index = 0; index < this.allISActives.length; index++) {
      if(this.allISActives[index].slotTime==this.timeSlots){
        this.allISActives[index].isActive=this.isSlotActive;
        //alert(this.allISActives[index].isActive);
      }else{
        this.allISActives[index].isActive=false;
      }
    }
    this.isSlotSelectedAfterChange.emit({isActive:this.allISActives}); 
  }  
  
isGuestEmailsDisplay=false;
guestEmailsClick(){
  this.isGuestEmailsDisplay=!this.isGuestEmailsDisplay;
}

isFormDisplay=false;
onClickConfirmButton(){
  this.isFormDisplay=!this.isFormDisplay;
  this.formDisplayToggle.emit(this.isFormDisplay);
}
}
