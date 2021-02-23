import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() cambiaFondo: any;
  constructor(private e: ElementRef, private r: Renderer2) { }

  @HostListener('mouseenter')
  entrarRaton(){
    this.r.setStyle(this.cambiaFondo, 'background-color', 'orange');
  }

  @HostListener('mouseleave')
  salirRaton(){
    this.r.setStyle(this.cambiaFondo, 'background-color', '');
  }

}
