import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestsService } from './requests.service';
import { Post } from '../posts/posts.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  // getAll() {
  //   return this.http.sendGetRequest('posts');
  // }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

}
