import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novels',
  templateUrl: './novels.component.html',
  styleUrls: ['./novels.component.scss']
})
export class NovelsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost8080/novels");
  }

}
