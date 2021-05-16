import { Component } from '@angular/core';
import { Post } from './posts/posts.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as postActions from "./actions/post.action";

import * as fromPost from "./reducer/posts.reducer";
import { getCount, getPosts } from './selector/posts.selector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers$: Observable<Post[]>;
  error$: Observable<String>;
  constructor(private store: Store<fromPost.AppState>) { }
  ngOnInit() {

    this.store.dispatch(new postActions.LoadPosts());
    this.customers$ = this.store.pipe(select(fromPost.getPosts));
    this.error$ = this.store.pipe(select(fromPost.getError));
    console.log(this.customers$);
    console.log(this.error$);

  }


}
// this.posts = this.store.select(getOptions).subscribe(posts_list => {
//   console.log(posts_list)
// });