import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  image:string = " ";
  @Input()
  title:string = " ";
  @Input()
  description:string = " ";
  @Input()
  Id:string = "2";
}
