import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      content works!
    </p>
  `,
  styles: [
  ]
})
export class ContentComponent {

}
