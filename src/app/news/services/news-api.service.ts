import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  baseUrl = 'https://newsapi.org/v2';
  apiKey = `${environment.newsApiKey}`;

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`);
  }

  getArticlesBySourceId(sourceId:string) {
    return this.http.get(
      `${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`
    );
  }


  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }
}

