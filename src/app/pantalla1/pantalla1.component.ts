import { Component, Input, OnInit } from '@angular/core';
import { tarjeta1 } from './tarjeta1';


@Component({
  selector: 'app-pantalla1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.css']
})
export class Pantalla1Component implements OnInit {

 @Input() tarjeta?: tarjeta1

 constructor() { }

  ngOnInit(): void {
  }

}
 
 
