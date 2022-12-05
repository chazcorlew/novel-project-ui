import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Novels } from './novels';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class NovelsService {


  private novelServerUrl = environment.novelsBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllNovels(): Observable<HttpResponse<Novels[]>>
  {
    return this.http.get(`http://localhost:8080/demo/novels`) as Observable<HttpResponse<Novels[]>>;
   // return this.http.get(`${this.novelServerUrl}/novels`) as Observable<HttpResponse<Novels[]>>;
    
  }

  public getNovelByNovel(): Observable<HttpResponse<Novels>> {
    return this.http.get(`http://localhost:8080/demo/novels/novel`) as Observable<HttpResponse<Novels>>;
  }

  public addNovel(novels: Novels): Observable<HttpResponse<Novels>>  {
    return this.http.post(`http://localhost:8080/demo/novels/addNovel`, novels) as Observable<HttpResponse<Novels>>;
  }

  public updateNovel(novels: Novels): Observable<HttpResponse<Novels>> {
    return this.http.put(`http://localhost:8080/demo/novels/update`, novels) as Observable<HttpResponse<Novels>>;
  
  }

  public deleteNovel(novelId: number): Observable<HttpResponse<void>>{
    return this.http.delete(`http//localhost:8080/demo/novels/delete`) as Observable<HttpResponse<void>>;
  }
}

