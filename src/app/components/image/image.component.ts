import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../../models/image.interface';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  private imagesService = inject(ImagesService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  image: Image | undefined;
  isDetailsVisible = false;

  constructor() {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.imagesService.getImageById(identifier).subscribe(
      (image) => {
        if (!image) {
          this.router.navigateByUrl('/');
        } else {
          this.image = image;
        }
      },
      () => {
        alert("Can't get image details!");
        this.router.navigateByUrl('/');
      }
    );
  }
}
