import { ActionDirectiveModule } from './../../directives/action/action.module';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LikeWidgetComponent } from './like-widget.component';
import { NgModule } from '@angular/core';
import { UniqueIDService } from '../../services/unique-id/unique-id.service';

@NgModule({
  declarations: [LikeWidgetComponent],
  imports: [CommonModule, FontAwesomeModule, ActionDirectiveModule],
  exports: [LikeWidgetComponent],
  providers: [UniqueIDService],
})
export class LikeWidgetModule {}
