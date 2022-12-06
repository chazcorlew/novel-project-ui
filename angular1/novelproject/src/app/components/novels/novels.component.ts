import { Component, OnInit } from '@angular/core';
import { Novels } from 'src/app/novels';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.scss']
})
export class NovelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.http.get("http://localhost8080/");
  }

}
