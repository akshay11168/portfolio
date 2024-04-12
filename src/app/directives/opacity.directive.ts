
import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appImageHover]',
    standalone: true,
})

export class ImageHoverDirective {

@Input()radius : number = 10
    constructor(private el: ElementRef, private renderer: Renderer2) { 

        this.renderer.setStyle(this.el.nativeElement, 'clipPath', 'unset');
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
 }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        const xPercentage = event.layerX / window.innerWidth * 100;
        const yPercentage = event.layerY / window.innerHeight * 100;
        console.log("radius",this.radius)
        this.renderer.setStyle(this.el.nativeElement, 'clipPath', `circle(${this.radius}% at ${xPercentage}% ${yPercentage}%)`);
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
        this.renderer.setStyle(this.el.nativeElement, 'trasition', `clip-path 1s ease-in-out`)
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.renderer.setStyle(this.el.nativeElement, 'clipPath', 'unset');
        this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    }

}