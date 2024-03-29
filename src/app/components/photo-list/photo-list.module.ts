import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { PhotoBoardModule } from './../../shared/photo-board/photo-board.module';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [CommonModule, PhotoBoardModule, FontAwesomeModule],
  exports: [PhotoListComponent],
})
export class PhotoListModule {}
