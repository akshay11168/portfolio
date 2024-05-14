import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTrackMouse]',
  standalone: true,
})
export class TrackMouseDirective {
  @Output() mouseCoordinates: EventEmitter<{ x: number, y: number , background :string}> = new EventEmitter();

  constructor() { }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {

    const targetElement: HTMLElement = event.target as HTMLElement;

    const coordinates = { x: event.clientX, y: event.clientY , background : window.getComputedStyle(targetElement).getPropertyValue('background')};
    this.mouseCoordinates.emit(coordinates);
  }
}