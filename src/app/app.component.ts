import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'noValue';
  firstNum: number = 0;
  secondNum: number = 0;
  onClickValue(val: string, type: any) {
    console.log(val, type);
    if (type === 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionCheck(val);
    }
     else if (type === 'C') {
      this.clear()
    }
  }
  onNumberClick(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }
  onFunctionCheck(val:string) {
    if (this.funcT == 'NoFunction') {
      this.firstNum = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    else if (this.funcT !== 'NoFunction') {
      this.secondNum = this.calValue;
      this.valueCalculate(val)

    }
  }
  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNum + this.secondNum;
      this.totalAssignValues(total, val)
      
    }
    if (this.funcT == '-') {
      const total = this.firstNum - this.secondNum;
      this.totalAssignValues(total, val);
     
    }
    if (this.funcT == 'x') {
      const total = this.firstNum * this.secondNum;
      this.totalAssignValues(total, val);
      
    }
     if (this.funcT == '/') {
       const total = this.firstNum / this.secondNum;
       this.totalAssignValues(total, val);
       
     }
     if (this.funcT == '%') {
       const total = this.firstNum % this.secondNum;
       this.totalAssignValues(total, val);
       
     }
  }
  totalAssignValues(total:number,val:string) {
    this.calValue = total;
    this.firstNum = total;
    this.secondNum = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == '=') {
      this.onEqual();
    }
  }
  onEqual() {
    this.firstNum = 0;
    this.secondNum = 0;
    this.funcT = 'NoFunction';
    this.calNumber='noValue'
  }
  clear() {
    this.firstNum = 0;
    this.secondNum = 0;
    this.funcT = 'NoFunction';
    this.calValue = 0;
    this.calNumber = 'noValue';
  }
}
