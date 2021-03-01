import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  parametroDelPadre:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {//recogemos el valor del parametro del padre
    this.route.parent!.params.subscribe(
      params => this.parametroDelPadre = params.param
    );
    console.log(this.parametroDelPadre);
  }

}
