import {
  AfterViewInit,
  Component,
  ComponentRef,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slotTemplate', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  private componentRefs: ComponentRef<any>[] = [];

  addComponent() {
    if (!this.viewContainerRef) {
      console.error('ViewContainerRef is not initialized');
      return;
    }
    const componentRef = this.viewContainerRef.createComponent(ButtonComponent);
    this.componentRefs.push(componentRef);
  }

  ngAfterViewInit(): void {
    console.log('ContainerComponent initialized');
    console.log('ViewContainerRef:', this.viewContainerRef);
  }

  ngOnDestroy() {
    console.log('ContainerComponent destroyed');
    this.componentRefs.forEach((ref) => ref.destroy());
  }
}