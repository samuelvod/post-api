import { postsAdapter, PostsState } from '../state/post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const POST_STATE_NAME = 'posts';
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);
export const postsSelectors = postsAdapter.getSelectors();

export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
    getPostsState,
    postsSelectors.selectEntities
);


export const getCount = createSelector(getPostsState, (state) => state.count);