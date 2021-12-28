import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

const makeSut = async () => {
  await TestBed.configureTestingModule({
    imports: [PhotoFrameModule],
  }).compileComponents();
  const fixture: ComponentFixture<PhotoFrameComponent> =
    TestBed.createComponent(PhotoFrameComponent);
  const sut = fixture.componentInstance;

  return { sut, fixture };
};

describe(PhotoFrameComponent.name, () => {
  it('Should create component', () => {
    const sut = makeSut();

    expect(sut).toBeTruthy();
  });
});
