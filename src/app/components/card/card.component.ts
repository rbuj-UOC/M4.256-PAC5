import { Component, Input } from '@angular/core';
import { Image } from '../../models/image.interface';

@Component({
  selector: 'app-card',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() public image!: Image;
}
