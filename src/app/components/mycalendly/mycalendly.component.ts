import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mycalendly',
  templateUrl: './mycalendly.component.html',
  styleUrls: ['./mycalendly.component.css']
})
export class MycalendlyComponent implements OnInit {

  // NewEventTypeForm:any=false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  onClickNewEventButton(){
    // this.NewEventTypeForm = !this.NewEventTypeForm;
    this.router.navigate(['../event-type/new']);
  }

}
