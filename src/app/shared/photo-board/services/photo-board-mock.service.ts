import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Photo } from '../interfaces/photo';
import { PhotoBoardService } from './photo-board.service';

const makePhotoList = (): Photo[] => {
  const photos: Photo[] = [];
  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: '',
    });
  }
  return photos;
};

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(makePhotoList());
  }
}
