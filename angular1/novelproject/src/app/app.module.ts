import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NovelmenuComponent } from './components/novelmenu/novelmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { NovelsComponent } from './components/novels/novels.component';
import { NovelcharactersComponent } from './components/novelcharacters/novelcharacters.component';
import { NovelsService } from './novels.service';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NovelmenuComponent,
    NovelsComponent,
    NovelcharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NovelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
