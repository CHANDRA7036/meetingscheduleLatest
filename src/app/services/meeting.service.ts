import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  calendarRoutes: any;

  private meetingSlots: any = {
    premNath:{
      201:{
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
        ]
      },
      202:{
        slotButtons:[
          {slotTime:'9.00AM' , isActive:false},
          {slotTime:'9.15AM' , isActive:false},
          {slotTime:'9.30AM' , isActive:false},
          {slotTime:'9.45AM' , isActive:false},
          {slotTime:'10.00AM' , isActive:false},
          {slotTime:'10.15AM' , isActive:false},
          {slotTime:'10.30AM' , isActive:false},         
        ]
      }
    },
    chandrasekhar:{
      201:{
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
        ]
      },
      202:{
        slotButtons:[
          {slotTime:'9.00AM' , isActive:false},
          {slotTime:'9.15AM' , isActive:false},
          {slotTime:'9.30AM' , isActive:false},
          {slotTime:'9.45AM' , isActive:false},
          {slotTime:'10.00AM' , isActive:false},
          {slotTime:'10.15AM' , isActive:false},
          {slotTime:'10.30AM' , isActive:false},         
        ]
      }
    }
  }
  
private userMeetings:any={
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
  ]
}
  constructor() { }

  getMeetingsByName(name) {
    return this.userMeetings[name];
  }

  getSlotsById(id){
    return this.meetingSlots[id];
  }

}
