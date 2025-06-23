import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { finalize, Observable, shareReplay } from 'rxjs';
import { Image } from '../models/image.interface';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private http = inject(HttpClient);
  private loadingService = inject(LoadingService);


  getAllImages(): Observable<Image[]> {
    this.loadingService.isLoading(true);
    return this.http.get<Image[]>('https://picsum.photos/v2/list').pipe(
      finalize(() => this.loadingService.isLoading(false)),
      shareReplay()
    );
  }

  getImageById(id: string | null): Observable<Image> {
    return this.http.get<Image>('https://picsum.photos/id/' + id + '/info');
  }
}
