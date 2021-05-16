import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // movies$: Observable<Posts[]> = this.store.select(state => state.posts);

  // constructor(private store: Store<{ posts: Posts[] }>) { }

  ngOnInit() {
    // this.store.dispatch({ type: '[Posts Page] Load Posts' });
    // this.store.dispatch(LoadPosts());
  }

}


