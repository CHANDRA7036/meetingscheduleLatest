import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  @Input() timeSlots:string;
  @Input() isSlotSelected:boolean;
  //@Output() isSlotSelectedAfterChange:EventEmitter=new EventEmitter();
  //@Output() isConfirmClicked:EventEmitter=new EventEmitter();
  ngOnInit(): void {
  }

  constructor() {    
  }

  isDisplay=false;
  onClickCalendar(){
    this.isDisplay=true;
  }
  
//   isSlotDisplay=false;
  onClickSlot(){
    this.isSlotSelected=!this.isSlotSelected;
    //this.isSlotSelectedAfterChange.emit(`${this.isSlotSelected}`);
  }
  

  // confirmClick(){
  //   this.isConfirmClicked.emit('1');
  // }

isGuestEmailsDisplay=false;
guestEmailsClick(){
  this.isGuestEmailsDisplay=!this.isGuestEmailsDisplay;
}

}
