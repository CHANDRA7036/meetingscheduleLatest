import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grouptype',
  templateUrl: './grouptype.component.html',
  styleUrls: ['./grouptype.component.css']
})
export class GrouptypeComponent implements OnInit {

  current = 1;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  oclickNextButton(){
    this.router.navigate(['event-type/edit']); 
    }

    

}
