import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-table',
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
