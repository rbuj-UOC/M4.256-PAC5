import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-table',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() images: Image[] = [];

  displayedColumns: string[] = [
    'image-id',
    'image-author',
    'image-width',
    'image-height'
  ];
}
