import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  isDetailsFormdisplay2:boolean=false;
  isDetailsFormdisplay1:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue = new Date('2017-01-25');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }

  index = 0;

  onIndexChange(event: number): void {
    this.index = event;
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
  
  

}
