import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';

@Component({
  template: `<div class="stub" (appAction)="actionHandler($event)"></div>`,
})
class ActionDirectiveTestComponentStub {
  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }
}

const makeSut = async () => {
  await TestBed.configureTestingModule({
    declarations: [ActionDirectiveTestComponentStub],
    imports: [ActionDirectiveModule],
  }).compileComponents();

  const fixture: ComponentFixture<ActionDirectiveTestComponentStub> =
    TestBed.createComponent(ActionDirectiveTestComponentStub);
  const sut = fixture.componentInstance;

  return { sut, fixture };
};

describe(ActionDirective.name, () => {
  describe('Dom', () => {
    it('Should (@Output appAction) emit event with payload when ENTER key is pressed', async () => {
      const { sut, fixture } = await makeSut();
      const divElement: HTMLElement =
        fixture.nativeElement.querySelector('.stub');
      const event = new KeyboardEvent('keyup', { key: 'Enter' });

      divElement.dispatchEvent(event);

      expect(sut.hasEvent()).toBeTrue();
    });

    it('Should (@Output appAction) emit with payload when clicked', async () => {
      const { sut, fixture } = await makeSut();
      const divElement: HTMLElement =
        fixture.nativeElement.querySelector('.stub');
      const event = new Event('click');

      divElement.dispatchEvent(event);

      expect(sut.hasEvent()).toBeTrue();
    });
  });
});
