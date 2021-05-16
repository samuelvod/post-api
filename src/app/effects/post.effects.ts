import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as postActions from "../actions/post.action";
import { PostsService } from '../services/posts.service';
import { Post } from '../posts/posts.model';

@Injectable()
export class PostEffect {
    constructor(
        private actions$: Actions,
        private postService: PostsService
    ) { }

    @Effect()
    loadCustomers$: Observable<Action> = this.actions$.pipe(
        ofType<postActions.LoadPosts>(
            postActions.PostActionTypes.LOAD_POSTS
        ),
        mergeMap((action: postActions.LoadPosts) =>
            this.postService.getPosts().pipe(
                map(
                    (customers: Post[]) =>
                        new postActions.LoadPostsSuccess(customers)
                ),
                catchError(err => of(new postActions.LoadPostsFail(err)))
            )
        )
    );



}