import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from '../../models/image.interface';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  image!: Image;
  isDetailsVisible = false;

  constructor(
    private imagesService: ImagesService,
    // to read parameter from url
    private activatedRoute: ActivatedRoute,
    // to redirect the user of this view if we don't have a valid identificador
    private router: Router
  ) {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.imagesService.getImageById(identifier).subscribe((image) => {
      if (!image) {
        this.router.navigateByUrl('/');
      }
      this.image = image;
    });
  }
}