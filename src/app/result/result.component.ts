import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() inputNum1 : any = "";
  @Input() inputNum2: any = ""; 
  @Input() operatorChoice  : any = "";
  result !:number ;

  constructor() { }

  ngOnInit(): void {
  }

  displayResults(){
    if (this.operatorChoice === "+")
     this.result = this.inputNum1 + this.inputNum2;
     
     else if (this.operatorChoice === "-")
     this.result = this.inputNum1 - this.inputNum2;
     
     else if (this.operatorChoice === "*")
     this.result = this.inputNum1 * this.inputNum2;
     
     else if (this.operatorChoice === "/")
     this.result = this.inputNum1 / this.inputNum2;
 }
  

}
