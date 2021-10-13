import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-calculator';

  inputNum1 = "";
  inputNum2 = "";
  operationChoice = "";

  inputNumber1($event :any){
    this.inputNum1 = $event;

  }
  inputNumber2($event :any){
    this.inputNum2 = $event;

  }

  addOper($event : any){
    this.operationChoice = $event;
  }
  subtractOper($event : any){
    this.operationChoice = $event;
  }
  multiplyOper($event : any){
    this.operationChoice = $event;
  }
  divideOper($event : any){
    this.operationChoice = $event;
  }


}
