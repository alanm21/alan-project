import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Pilotos } from '../escuderias/pilotos';

@Directive({
  selector: '[appForDelay]'
})
export class ForDelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  items: Array<Pilotos> = [];

  @Input()
  set appForDelayOf(array: Pilotos[]) {
    this.items = array;
    let i = 0;
  

    this.viewContainer.clear();
    this.items.forEach(n => {
      new Promise<void> ((resolve, reject) => {
        
        setTimeout(() => {
          this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: n })
          console.log(n);
          resolve();      
        }, 100*i);
        i++;
    
      })

    });
  }
}
