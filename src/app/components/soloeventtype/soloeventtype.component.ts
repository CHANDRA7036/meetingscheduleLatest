import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soloeventtype',
  templateUrl: './soloeventtype.component.html',
  styleUrls: ['./soloeventtype.component.css']
})
export class SoloeventtypeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  oclickNextButton(){
  this.router.navigate(['event-type/edit']); 
  }

}
