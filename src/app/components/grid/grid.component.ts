import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-grid',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0.2 })),
      transition('void <=> *', animate(1500))
    ])
  ]
})
export class GridComponent {
  @Input() images: Image[] = [];
}
