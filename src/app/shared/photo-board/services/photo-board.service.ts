import { delay, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './../interfaces/photo';

@Injectable()
export class PhotoBoardService {
  constructor(private httpClient: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this.httpClient
      .get<Photo[]>('http://localhost:3000/photos')
      .pipe(
        map((photos) => {
          return photos.map((photo) => ({
            ...photo,
            description: photo.description.toUpperCase(),
          }));
        })
      )
      .pipe(tap((photos) => console.log(photos)))
      .pipe(delay(2000));
  }
}
