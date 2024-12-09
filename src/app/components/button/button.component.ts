import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button class="bg-blue-500 text-white p-2 rounded">
    Dynamic Button
  </button>`,
})
export class ButtonComponent {}
