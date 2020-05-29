import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor() { }

getMeetings(){
  return [
    {meetingDuration:'30 Minutes'},
    {meetingDuration:'60 Minutes'}
  ]
}

}
