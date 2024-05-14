import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      comment works!
    </p>
  `,
  styles: [
  ]
})
export class CommentComponent {

}
