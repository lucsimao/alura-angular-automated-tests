import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

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
  it('Should create component', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });

  describe(PhotoFrameComponent.prototype.like.name, () => {
    it('Should trigger (@Output like) once when called multiple times within debounce time', fakeAsync(async () => {
      const { sut, fixture } = await makeSut();
      let times = 0;
      sut.liked.subscribe(() => times++);
      fixture.detectChanges();

      sut.like();
      sut.like();
      tick(500);

      expect(times).toBe(1);
    }));

    it('Should trigger (@Output like) two times when called outside debounce time', fakeAsync(async () => {
      const { sut, fixture } = await makeSut();
      let times = 0;
      sut.liked.subscribe(() => times++);
      fixture.detectChanges();

      sut.like();
      tick(500);
      sut.like();
      tick(500);

      expect(times).toBe(2);
    }));
  });
});
