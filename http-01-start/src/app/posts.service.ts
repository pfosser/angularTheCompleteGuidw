import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {
      title,
      content,
    };

    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-28b6c-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.http
      .get<Record<string, Post>>(
        'https://ng-complete-guide-28b6c-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          if (responseData == null) {
            return [];
          }
          return Object.keys(responseData).map((k) => ({
            ...responseData[k],
            id: k,
          }));
        }),
        catchError((errorRes) => {
          // send to analytics server
          return throwError(() => errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-28b6c-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
