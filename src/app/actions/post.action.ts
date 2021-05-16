import { Action } from "@ngrx/store";

import { Post } from '../posts/posts.model';



export enum PostActionTypes {
    LOAD_POSTS = "[Customer] Load Customers",
    LOAD_POSTS_SUCCESS = "[Customer] Load Customers Success",
    LOAD_POSTS_FAIL = "[Customer] Load Customers Fail",

}

export class LoadPosts implements Action {
    readonly type = PostActionTypes.LOAD_POSTS;
}

export class LoadPostsSuccess implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_SUCCESS;

    constructor(public payload: Post[]) { }
}

export class LoadPostsFail implements Action {
    readonly type = PostActionTypes.LOAD_POSTS_FAIL;

    constructor(public payload: string) { }
}


export type Actions =
    | LoadPosts
    | LoadPostsSuccess
    | LoadPostsFail