import { Component } from '@angular/core';
import { ImageHoverDirective } from '../../../directives/opacity.directive';

@Component({
  selector: 'app-masking',
  standalone: true,
  imports: [ImageHoverDirective],
  templateUrl: './masking.component.html',
  styleUrl: './masking.component.scss'
})
export class MaskingComponent {

  mouseX: number = 0
  mouseY: number = 0
  mouseBackground: string = ''
  opacity: number = 0
  radius: number = 10
  onMouseCoordinates(event: { x: number, y: number, background: string }) {
    this.mouseX = (event.x / window.innerWidth) / 100
    this.mouseY = (event.y / window.innerHeight) / 100
    this.mouseBackground = event.background

    // You can do whatever you want with the mouse coordinates here
  }



  setValue(event: MouseEvent) {
    this.radius = 22
    console.log("radius value enter", this.radius,event)
  }

  unSetValue(event: MouseEvent) {
    this.radius = 10
    console.log("radius value leave", this.radius,event)
  }
}
