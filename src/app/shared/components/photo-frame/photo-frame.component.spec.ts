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

  describe('Dom', () => {
    it('Should display number of likes when (@Input likes) is incremented', async () => {
      const { sut, fixture } = await makeSut();
      const element: HTMLElement =
        fixture.nativeElement.querySelector('.like-counter');
      fixture.detectChanges();

      sut.likes++;
      fixture.detectChanges();

      expect(element.textContent.trim()).toEqual('1');
    });

    it('Should have arial-label with 0 (@Input likes)', async () => {
      const { fixture } = await makeSut();
      const element: HTMLElement = fixture.nativeElement.querySelector('span');
      fixture.detectChanges();

      expect(element.getAttribute('aria-label')).toBe('0 people liked');
    });

    it('Should update aria-label when (@Input likes) is incremented', async () => {
      const { sut, fixture } = await makeSut();
      const element: HTMLElement = fixture.nativeElement.querySelector('span');
      fixture.detectChanges();

      sut.likes++;
      fixture.detectChanges();

      expect(element.getAttribute('aria-label')).toBe('1 people liked');
    });

    it('Should display image with src and description when bound to properties', async () => {
      const { sut, fixture } = await makeSut();
      const description = 'any_description';
      const src = 'http://any_site/img.jpg';
      const element: HTMLImageElement =
        fixture.nativeElement.querySelector('img');

      sut.src = src;
      sut.description = description;
      fixture.detectChanges();

      expect(element.getAttribute('src')).toBe(src);
      expect(element.getAttribute('alt')).toBe(description);
    });
  });
});
