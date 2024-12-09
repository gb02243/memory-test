import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(ContainerComponent) containerComponent!: ContainerComponent;

  isVisible = true;

  hideContainer() {
    this.isVisible = !this.isVisible;
  }

  addComponent() {
    if (this.containerComponent) {
      this.containerComponent.addComponent();
    }
  }
}