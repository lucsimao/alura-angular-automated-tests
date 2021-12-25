import { TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIDService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

import { LikeWidgetModule } from './like-widget.module';
const makeSut = async () => {
  await TestBed.configureTestingModule({
    imports: [LikeWidgetModule],
  }).compileComponents();
  const fixture = TestBed.createComponent(LikeWidgetComponent);
  const sut = fixture.componentInstance;
  return { sut, fixture };
};

describe(LikeWidgetComponent.name, () => {
  it('should create fixture', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });

  it('should auto generate ID when id input property is missing', async () => {
    const { sut, fixture } = await makeSut();

    fixture.detectChanges();

    expect(sut.id).toBeTruthy();
  });

  it('should not generate ID when id input property is present', async () => {
    const { sut, fixture } = await makeSut();
    const fakeId = 'any_id';

    sut.id = fakeId;
    fixture.detectChanges();

    const result = fixture.componentInstance.id;

    expect(result).toBe('any_id');
  });

  describe(LikeWidgetComponent.prototype.like.name, () => {
    it('should trigger emission when called', async () => {
      const { sut, fixture } = await makeSut();
      fixture.detectChanges();
      const emitSpy = spyOn(sut.liked, 'emit');

      sut.like();

      expect(emitSpy).toHaveBeenCalled();
    });
  });
});
