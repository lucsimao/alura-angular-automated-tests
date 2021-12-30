import { SimpleChange, SimpleChanges } from '@angular/core';

import { Photo } from './interfaces/photo';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { TestBed } from '@angular/core/testing';

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
    imports: [PhotoBoardModule],
  }).compileComponents();
  const fixture = TestBed.createComponent(PhotoBoardComponent);
  const sut = fixture.componentInstance;

  return { sut, fixture };
};

describe(PhotoBoardComponent.name, () => {
  it('Should display rows and columns when (@Input photos) has value', async () => {
    const { sut, fixture } = await makeSut();
    const photos = makePhotoList();

    sut.photos = photos;
    const change: SimpleChanges = {
      photos: new SimpleChange([], sut.photos, true),
    };
    fixture.detectChanges();
    sut.ngOnChanges(change);

    expect(sut.rows.length).withContext('Number of rows').toBe(2);
    expect(sut.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(sut.rows[1].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
});
