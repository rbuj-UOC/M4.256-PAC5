import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public image!: Image;
}
