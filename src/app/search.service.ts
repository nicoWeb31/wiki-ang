import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch='

  constructor(
    private http: HttpClient,
  ) { }


  search(term: string):Observable<any> {
    return this.http.get(`${this.url}${term}`, {params :{origin : '*'}})
  }
}
