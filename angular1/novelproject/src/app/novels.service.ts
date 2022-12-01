import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Novels } from './novels';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class NovelsService {


  private novelServerUrl = environment.novelsBaseUrl;

  constructor(private http: HttpClient) { }

  public getAllNovels(): Observable<Novels[]> {
    return this.http.get<Novels[]>(`${this.novelServerUrl}/novels/all`);
  }

  public getNovelByNovel(): Observable<Novels> {
    return this.http.get<Novels>(`${this.novelServerUrl}/novels/novel`);
  }

  public addNovel(novels: Novels): Observable<Novels> {
    return this.http.post<Novels>(`${this.novelServerUrl}/novels/addNovel`, novels);
  }

  public updateNovel(novels: Novels): Observable<Novels> {
    return this.http.put<Novels>(`${this.novelServerUrl}/novels/update`, novels);
  
  }

  public deleteNovel(novelId: number): Observable<void> {
    return this.http.delete<void>(`${this.novelServerUrl}/novels/delete${novelId}`);
  }
}

