import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isGuestEmailsDisplay = false;
  constructor() { }

  ngOnInit(): void {
  }

  guestEmailsClick() {
    this.isGuestEmailsDisplay = !this.isGuestEmailsDisplay;
  }

}
