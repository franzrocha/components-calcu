import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() operation = new EventEmitter<string>();

  operationChoice : string = "";

  constructor() { }

  ngOnInit(): void {
  }
  addOperation(){
    this.operationChoice = "+";
    this.operation.emit(this.operationChoice);
  }
  subOperation(){
    this.operationChoice = "-";
    this.operation.emit(this.operationChoice);
  }
  multiOperation(){
    this.operationChoice = "*";
    this.operation.emit(this.operationChoice);
  }
  divideOperation(){
    this.operationChoice = "/";
    this.operation.emit(this.operationChoice);
  }
}
