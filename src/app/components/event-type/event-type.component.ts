import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.css']
})
export class EventTypeComponent implements OnInit {

 

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  // onclickOneOnOne(){

  // }

}
