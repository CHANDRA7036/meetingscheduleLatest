import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  calendarRoutes: any;
  inforamtionObject:any;
  private meetingSlots: any = {
    premNath: {
      201: {
        slotButtons: [
          { slotTime: '9.00AM', isActive: false },
          { slotTime: '9.15AM', isActive: false },
          { slotTime: '9.30AM', isActive: false },
          { slotTime: '9.45AM', isActive: false },
          { slotTime: '10.00AM', isActive: false },
          { slotTime: '10.15AM', isActive: false },
          { slotTime: '10.30AM', isActive: false },
          { slotTime: '10.45AM', isActive: false },
          { slotTime: '11.00AM', isActive: false },
          { slotTime: '11.15AM', isActive: false },
          { slotTime: '11.30AM', isActive: false },
          { slotTime: '11.45AM', isActive: false },
          { slotTime: '12.00PM', isActive: false },
          { slotTime: '12.10PM', isActive: false },
          { slotTime: '12.30PM', isActive: false },
          { slotTime: '12.45PM', isActive: false },
          { slotTime: '1.00PM', isActive: false },
          { slotTime: '1.15PM', isActive: false },
          { slotTime: '1.30PM', isActive: false },
          { slotTime: '1.45PM', isActive: false },
          { slotTime: '2.00PM', isActive: false },
          { slotTime: '2.15PM', isActive: false },
          { slotTime: '2.30PM', isActive: false },
          { slotTime: '2.45PM', isActive: false },
          { slotTime: '3.00PM', isActive: false },
          { slotTime: '3.15PM', isActive: false },
          { slotTime: '3.30PM', isActive: false },
          { slotTime: '3.45PM', isActive: false },
          { slotTime: '4.00PM', isActive: false },
          { slotTime: '4.15PM', isActive: false },
          { slotTime: '4.30PM', isActive: false }
        ]
      },
      202: {
        slotButtons: [
          { slotTime: '9.00AM', isActive: false },
          { slotTime: '9.15AM', isActive: false },
          { slotTime: '9.30AM', isActive: false },
          { slotTime: '9.45AM', isActive: false },
          { slotTime: '10.00AM', isActive: false },
          { slotTime: '10.15AM', isActive: false },
          { slotTime: '10.30AM', isActive: false },
          { slotTime: '10.45AM', isActive: false },
          { slotTime: '11.00AM', isActive: false },
          { slotTime: '11.15AM', isActive: false },
          { slotTime: '11.30AM', isActive: false },
          { slotTime: '11.45AM', isActive: false },
          { slotTime: '12.00PM', isActive: false },
          { slotTime: '12.10PM', isActive: false },
          { slotTime: '12.30PM', isActive: false },
          { slotTime: '12.45PM', isActive: false },
          { slotTime: '1.00PM', isActive: false },
          { slotTime: '1.15PM', isActive: false },
          { slotTime: '1.30PM', isActive: false },
          { slotTime: '1.45PM', isActive: false },
          { slotTime: '2.00PM', isActive: false },
          { slotTime: '2.15PM', isActive: false },
          { slotTime: '2.30PM', isActive: false },
          { slotTime: '2.45PM', isActive: false },
          { slotTime: '3.00PM', isActive: false },
          { slotTime: '3.15PM', isActive: false },
          { slotTime: '3.30PM', isActive: false },
          { slotTime: '3.45PM', isActive: false },
          { slotTime: '4.00PM', isActive: false },
          { slotTime: '4.15PM', isActive: false },
          { slotTime: '4.30PM', isActive: false }
        ]
      }
    },
    chandrasekhar: {
      101: {
        slotButtons: [
          { slotTime: '9.00AM', isActive: false },
          { slotTime: '9.15AM', isActive: false },
          { slotTime: '9.30AM', isActive: false },
          { slotTime: '9.45AM', isActive: false },
          { slotTime: '10.00AM', isActive: false },
          { slotTime: '10.15AM', isActive: false },
          { slotTime: '10.30AM', isActive: false },
          { slotTime: '10.45AM', isActive: false },
          { slotTime: '11.00AM', isActive: false },
          { slotTime: '11.15AM', isActive: false },
          { slotTime: '11.30AM', isActive: false },
          { slotTime: '11.45AM', isActive: false },
          { slotTime: '12.00PM', isActive: false },
          { slotTime: '12.10PM', isActive: false },
          { slotTime: '12.30PM', isActive: false },
          { slotTime: '12.45PM', isActive: false },
          { slotTime: '1.00PM', isActive: false },
          { slotTime: '1.15PM', isActive: false },
          { slotTime: '1.30PM', isActive: false },
          { slotTime: '1.45PM', isActive: false },
          { slotTime: '2.00PM', isActive: false },
          { slotTime: '2.15PM', isActive: false },
          { slotTime: '2.30PM', isActive: false },
          { slotTime: '2.45PM', isActive: false },
          { slotTime: '3.00PM', isActive: false },
          { slotTime: '3.15PM', isActive: false },
          { slotTime: '3.30PM', isActive: false },
          { slotTime: '3.45PM', isActive: false },
          { slotTime: '4.00PM', isActive: false },
          { slotTime: '4.15PM', isActive: false },
          { slotTime: '4.30PM', isActive: false }
        ]
      },
      102: {
        slotButtons: [
          { slotTime: '9.00AM', isActive: false },
          { slotTime: '9.15AM', isActive: false },
          { slotTime: '9.30AM', isActive: false },
          { slotTime: '9.45AM', isActive: false },
          { slotTime: '10.00AM', isActive: false },
          { slotTime: '10.15AM', isActive: false },
          { slotTime: '10.30AM', isActive: false },
          { slotTime: '10.45AM', isActive: false },
          { slotTime: '11.00AM', isActive: false },
          { slotTime: '11.15AM', isActive: false },
          { slotTime: '11.30AM', isActive: false },
          { slotTime: '11.45AM', isActive: false },
          { slotTime: '12.00PM', isActive: false },
          { slotTime: '12.10PM', isActive: false },
          { slotTime: '12.30PM', isActive: false },
          { slotTime: '12.45PM', isActive: false },
          { slotTime: '1.00PM', isActive: false },
          { slotTime: '1.15PM', isActive: false },
          { slotTime: '1.30PM', isActive: false },
          { slotTime: '1.45PM', isActive: false },
          { slotTime: '2.00PM', isActive: false },
          { slotTime: '2.15PM', isActive: false },
          { slotTime: '2.30PM', isActive: false },
          { slotTime: '2.45PM', isActive: false },
          { slotTime: '3.00PM', isActive: false },
          { slotTime: '3.15PM', isActive: false },
          { slotTime: '3.30PM', isActive: false },
          { slotTime: '3.45PM', isActive: false },
          { slotTime: '4.00PM', isActive: false },
          { slotTime: '4.15PM', isActive: false },
          { slotTime: '4.30PM', isActive: false }
        ]
      }
    }
  }

  private userMeetings: any = {
    chandrasekhar: [
      {
        id: 101,
        name: '30 Minutes',
        duration: '30',
        description: 'Book meeting for 30mins'
      },
      {
        id: 102,
        name: '60 Minutes',
        duration: '60',
        description: 'Book meeting for 30mins'
      }
    ],
    premNath: [
      {
        id: 201,
        name: '30 Minutes',
        duration: '30',
        description: 'Book meeting for 30mins'
      },
      {
        id: 202,
        name: '60 Minutes',
        duration: '60',
        description: 'Book meeting for 30mins'
      }
    ]
  }

  constructor() { }

  getMeetingsByName(name) {
    return this.userMeetings[name];
  }

  getSlotsById(name) {
    return this.meetingSlots[name];
  }

  getInformation(){
      
  }

}
