import { TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIDService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';
const makeSut = async () => {
  await TestBed.configureTestingModule({
    imports: [LikeWidgetModule],
  }).compileComponents();
  const sut = TestBed.createComponent(LikeWidgetComponent);

  return { sut };
};

describe(LikeWidgetComponent.name, () => {
  it('should create component', async () => {
    const { sut } = await makeSut();

    const instance = sut.componentInstance;

    expect(instance).toBeTruthy();
  });
});
