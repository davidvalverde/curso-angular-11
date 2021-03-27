import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() num: number;
  @Output() result = new  EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  
  lanzarNum(){

    this.result.emit(this.num);
  }

}