import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { NgModule } from '@angular/core';
import { PhotoBoardModule } from './shared/photo-board/photo-board.module';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule,
    PhotoFrameModule,
    HttpClientModule,
    PhotoBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
