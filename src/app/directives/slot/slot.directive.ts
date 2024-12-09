import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSlot]',
})
export class SlotDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
    console.log('SlotDirective initialized with ViewContainerRef:', viewContainerRef);
  }
}