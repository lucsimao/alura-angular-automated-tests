import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PhotoBoardService } from './photo-board.service';
import { TestBed } from '@angular/core/testing';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    { id: 1, description: 'example 1', src: 'any_source1' },
    { id: 2, description: 'example 2', src: 'any_source2' },
  ],
};

const makeSut = async () => {
  await TestBed.configureTestingModule({
    providers: [PhotoBoardService],
    imports: [HttpClientTestingModule],
  }).compileComponents();
  const service = TestBed.inject(PhotoBoardService);
  const httpController = TestBed.inject(HttpTestingController);

  return { service, httpController };
};

describe(PhotoBoardService.name, () => {
  describe(PhotoBoardService.prototype.getPhotos.name, () => {
    it('Should return photos with description in uppercase', async () => {
      const { service, httpController } = await makeSut();

      const promise = service.getPhotos().toPromise();
      httpController.expectOne(mockData.api).flush(mockData.data);
      const photos = await promise;

      httpController.verify();
      expect(photos[0].description).toBe('EXAMPLE 1');
      expect(photos[1].description).toBe('EXAMPLE 2');
    });
  });
});
