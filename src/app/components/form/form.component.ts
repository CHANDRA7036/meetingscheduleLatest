import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isGuestEmailsDisplay=false;
guestEmailsClick(){
  this.isGuestEmailsDisplay=!this.isGuestEmailsDisplay;
}

// location;
// goBack(): void {
//   this.location.back();
// }

}
