import { TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIDService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';
const makeSut = async () => {
  await TestBed.configureTestingModule({
    imports: [LikeWidgetModule],
  }).compileComponents();
  const component = TestBed.createComponent(LikeWidgetComponent);
  const sut = component.componentInstance;
  return { sut, component };
};

describe(LikeWidgetComponent.name, () => {
  it('should create component', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });

  it('should auto generate ID when id input property is missing', async () => {
    const { sut, component } = await makeSut();

    component.detectChanges();

    expect(sut.id).toBeTruthy();
  });

  it('should not generate ID when id input property is present', async () => {
    const { sut, component } = await makeSut();
    const fakeId = 'any_id';

    sut.id = fakeId;
    component.detectChanges();

    const result = component.componentInstance.id;

    expect(result).toBe('any_id');
  });
});
