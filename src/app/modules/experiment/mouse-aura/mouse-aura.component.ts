import { Component } from '@angular/core';
import { TrackMouseDirective } from '../../../directives/trackmouse.directive';

@Component({
  selector: 'app-mouse-aura',
  standalone: true,
  imports: [TrackMouseDirective],
  templateUrl: './mouse-aura.component.html',
  styleUrl: './mouse-aura.component.scss'
})
export class MouseAuraComponent {

  mouseX : number =0
  mouseY : number =0
  mouseBackground : string = ''
  onMouseCoordinates(event: { x: number, y: number , background : string}) {
    this.mouseX = event.x
    this.mouseY = event.y
    this.mouseBackground = event.background
    // You can do whatever you want with the mouse coordinates here
  }
}
