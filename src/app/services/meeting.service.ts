import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  calendarRoutes: any;

  constructor() { }

  getMeetings() {
    return [
      { meetingDuration: '30 Minutes' },
      { meetingDuration: '60 Minutes' }
    ]   
  }
  
  onTap() {
    this.calendarRoutes = {
      "calendar": "calendar",
      "profile":[
        {
          "profileName":"chandrasekhar",
          "profileIdList":["7036","7037"],
          "confirm": "confirm"
        },
        {
          "profileName":"prem",
          "profileIdList":["7036","7037"],
          "confirm": "confirm"
        }
      ]
    };
   return this.calendarRoutes;
  }



  // getRouts(){
  //   calendar:
  //     chandrasekhar:
  //       7036:
  // }

  // routeCompontes=[
  //   { "id":123},
  //   { "id":1234},
  //   { "id":12345},
  // ]

}
