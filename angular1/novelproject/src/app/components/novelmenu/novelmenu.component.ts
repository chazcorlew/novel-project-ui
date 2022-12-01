import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novelmenu',
  templateUrl: './novelmenu.component.html',
  styleUrls: ['./novelmenu.component.scss']
})
export class NovelmenuComponent implements OnInit {

  novelmenu:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
   let repsonse = this.http.get("http://localhost:8080")
   repsonse.subscribe((data)=>this.novelmenu=repsonse);
  }

}
