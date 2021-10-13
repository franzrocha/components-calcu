import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() valueSend = new EventEmitter<string>();
  @Output() valueSend2 = new EventEmitter<string>();

  inputNum1 = "";
  inputNum2 = "";

  sendNum1(){
    this.valueSend.emit(this.inputNum1);
  }

  sendNum2(){
    this.valueSend2.emit(this.inputNum2);  
  }


}
