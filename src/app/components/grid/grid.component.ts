import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() images: Image[] = [];
}
