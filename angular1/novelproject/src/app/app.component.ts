import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Novels } from './novels';
import { NovelsService } from './novels.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public novels: Novels[] = [];

  constructor(private novelsService: NovelsService){}
  
  ngOnInit() {
  this.getAllNovels();
  }

  getAllNovels(): void {
  this.novelsService.getAllNovels().subscribe(
    (response: any) => {
      this.novels = response;
      console.log(this.novels);
        },
  );
  
  }
}
