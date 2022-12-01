import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NpstorageService } from './npstorage.service';
import { BannerComponent } from './components/banner/banner.component';
import { NovelmenuComponent } from './components/novelmenu/novelmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { NovelsComponent } from './components/novels/novels.component';
import { NovelcharactersComponent } from './components/novelcharacters/novelcharacters.component';


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
  providers: [
    NpstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
