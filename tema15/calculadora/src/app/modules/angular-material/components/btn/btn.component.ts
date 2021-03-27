import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  @Input() op:String;
  @Input() numbers:number[];
  @Output() result = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  operacion(){
    switch (this.op) {
      case '+':
        var resultado = this.numbers.reduce((a, b) => a + b);
        this.result.emit(resultado);
        break;
       case '-': 
          var resultado = this.numbers.reduce((a, b) => a - b);
          this.result.emit(resultado); break;
         case '*': 
            var resultado = this.numbers.reduce((a, b) => a * b);
            this.result.emit(resultado); break;
            case '/': 
              var resultado = this.numbers.reduce((a, b) => a / b);
              this.result.emit(resultado); break;
      default: this.result.emit(-1); break;
    }
  } 
}