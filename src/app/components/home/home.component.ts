import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../../models/image.interface';
import { ImagesService } from '../../services/images.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-home',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private imagesService = inject(ImagesService);
  private loadingService = inject(LoadingService);

  btnActive: number;

  images: Image[] = [];
  loading$: Observable<boolean>;

  constructor() {
    this.loading$ = this.loadingService.loading.asObservable();
    this.btnActive = 1;
  }

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((images) => (this.images = images));
  }

  toggleButton(id: number) {
    this.btnActive = id;
  }
}
