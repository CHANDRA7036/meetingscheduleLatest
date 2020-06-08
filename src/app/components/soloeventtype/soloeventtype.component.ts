import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soloeventtype',
  templateUrl: './soloeventtype.component.html',
  styleUrls: ['./soloeventtype.component.css']
})
export class SoloeventtypeComponent implements OnInit {

  index = 0;

  isDetailsFormdisplay2:boolean=false;
  isDetailsFormdisplay1:boolean=true;


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  onclickStep2(){
    this.isDetailsFormdisplay2=true;
    this.isDetailsFormdisplay1=false;
    // alert("isDetailsFormdisplay1: "+this.isDetailsFormdisplay1+"  isDetailsFormdisplay2:"+this.isDetailsFormdisplay2);
  }

  onclickStep1(){
    this.isDetailsFormdisplay2=false;
    this.isDetailsFormdisplay1=true;
    // alert("isDetailsFormdisplay1: "+this.isDetailsFormdisplay1+"  isDetailsFormdisplay2:"+this.isDetailsFormdisplay2);
  }

  onclickNextButton3(){
  this.router.navigate(['event-type/edit']); 
  }

  onIndexChange(event: number): void {
    this.index = event;
  }

  onClickBackButton(){
    this.router.navigate(['event-type/new']);
  }

  onclickNextButton2(){
    // this.router.navigate(['event-type/edit']);
  }

  // oclickNextButton3(){

  // }

}
