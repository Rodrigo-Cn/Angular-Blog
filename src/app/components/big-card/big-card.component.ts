import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  titulo:string = " ";
  @Input()
  photo:string = " ";
  @Input()
  description:string = " ";
  @Input()
  Id:string = "0"
}
