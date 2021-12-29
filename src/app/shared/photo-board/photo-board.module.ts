import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardService } from './services/photo-board.service';
import { PhotoFrameModule } from './../components/photo-frame/photo-frame.module';

@NgModule({
  declarations: [PhotoBoardComponent],
  imports: [CommonModule, PhotoFrameModule],
  exports: [PhotoBoardComponent],
  providers: [PhotoBoardService],
})
export class PhotoBoardModule {}
