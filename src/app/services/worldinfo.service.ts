import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldinfoService {

  constructor(private http: HttpClient) { }

  getWorldInfo(path: string) : Observable<any> {
    const apiUrl = `http://api.worldbank.org/v2/country/${path}?format=json`;
    return this.http.get<any>(apiUrl);
  }
}
