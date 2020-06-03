import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MeetingService } from '../../services/meeting.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  @Input() timeSlots: string;
  @Input() isSlotActive: boolean;
  @Input() allISActives: any;
  @Output() isSlotSelectedAfterChange: EventEmitter<any> = new EventEmitter();
  @Output() selectedTime: EventEmitter<any> = new EventEmitter();
  @Output() formDisplayToggle: EventEmitter<any> = new EventEmitter();

  calendarUsername: any;
  id: any;
  isGuestEmailsDisplay = false;
  isFormDisplay = false;

  ngOnInit(): void {
  }

  constructor(private meetingService: MeetingService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.calendarUsername = params['calendarUsername'];
      this.id = params['id'];
    });
  };

  dateSlotSelected() {
    this.selectedTime.emit({ slotTime: this.timeSlots });
    // alert(this.timeSlots);
  }

  onClickSlot() {
    this.isSlotActive = !this.isSlotActive;
    for (let index = 0; index < this.allISActives.length; index++) {
      if (this.allISActives[index].slotTime == this.timeSlots) {
        this.allISActives[index].isActive = this.isSlotActive;
      } else {
        this.allISActives[index].isActive = false;
      }
    }
    this.isSlotSelectedAfterChange.emit({ isActive: this.allISActives });
  }

  guestEmailsClick() {
    this.isGuestEmailsDisplay = !this.isGuestEmailsDisplay;
  }

  onClickConfirmButton() {
    //this.router.navigate(['/calendar',this.calendarUsername,this.id,'confirm',  {information:this.eventData}]);
    this.router.navigate(['/calendar', this.calendarUsername, this.id, 'confirm']);
    this.isFormDisplay = !this.isFormDisplay;
    this.formDisplayToggle.emit(this.isFormDisplay);
    // alert(this.timeSlots);
  }








}
