import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LikeWidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
