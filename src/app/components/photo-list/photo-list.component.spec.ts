import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { TestBed } from '@angular/core/testing';
const makeSut = async () => {
  await TestBed.configureTestingModule({
    imports: [PhotoListModule, HttpClientModule],
  }).compileComponents();

  const fixture = TestBed.createComponent(PhotoListComponent);
  const sut = fixture.componentInstance;

  return { sut };
};

describe(PhotoListComponent.name, () => {
  it('Should create component', async () => {
    const { sut } = await makeSut();

    expect(sut).toBeTruthy();
  });
});
