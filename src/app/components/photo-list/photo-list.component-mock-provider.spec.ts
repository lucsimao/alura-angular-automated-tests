import { HttpClientModule } from '@angular/common/http';
import { Photo } from './../../shared/photo-board/interfaces/photo';
import { PhotoBoardMockService } from './../../shared/photo-board/services/photo-board-mock.service';
import { PhotoBoardService } from './../../shared/photo-board/services/photo-board.service';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

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

const makeSut = async () => {
  await TestBed.configureTestingModule({
    imports: [PhotoListModule, HttpClientModule],
    providers: [
      {
        provide: PhotoBoardService,
        useClass: PhotoBoardMockService,
      },
    ],
  }).compileComponents();

  const fixture = TestBed.createComponent(PhotoListComponent);
  const service = TestBed.inject(PhotoBoardService);
  const sut = fixture.componentInstance;

  return { sut, fixture, service };
};

describe(PhotoListComponent.name + ' Mock Provider', () => {
  describe('Dom', () => {
    it('Should display board when data arrives', async () => {
      const { fixture, service } = await makeSut();

      const photos = makePhotoList();
      spyOn(service, 'getPhotos').and.returnValue(of(photos));
      fixture.detectChanges();
      const board = fixture.nativeElement.querySelector('app-photo-board');
      const loader = fixture.nativeElement.querySelector('.loader');

      expect(board).withContext('Should display board').toBeTruthy();
      expect(loader).withContext('Should not display loader').toBeNull();
    });
  });
});
