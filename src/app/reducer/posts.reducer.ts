import * as customerActions from "../actions/post.action";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";


import * as fromRoot from "../appstate";
import { Post } from '../posts/posts.model';

export interface PostState extends EntityState<Post> {
    selectedCustomerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    posts: PostState;
}

export const customerAdapter: EntityAdapter<Post> = createEntityAdapter<
    Post
>();

export const defaultCustomer: PostState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ""
};

export const initialState = customerAdapter.getInitialState(defaultCustomer);

export function postReducer(
    state = initialState,
    action: customerActions.Actions
): PostState {
    switch (action.type) {
        case customerActions.PostActionTypes.LOAD_POSTS_SUCCESS: {
            return customerAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        }
        case customerActions.PostActionTypes.LOAD_POSTS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

const getCustomerFeatureState = createFeatureSelector<PostState>(
    "posts"
);

export const getPosts = createSelector(
    getCustomerFeatureState,
    customerAdapter.getSelectors().selectAll
);

export const getCustomersLoading = createSelector(
    getCustomerFeatureState,
    (state: PostState) => state.loading
);

export const getCustomersLoaded = createSelector(
    getCustomerFeatureState,
    (state: PostState) => state.loaded
);

export const getError = createSelector(
    getCustomerFeatureState,
    (state: PostState) => state.error
);

export const getCurrentCustomerId = createSelector(
    getCustomerFeatureState,
    (state: PostState) => state.selectedCustomerId
);
export const getCurrentCustomer = createSelector(
    getCustomerFeatureState,
    getCurrentCustomerId,
    state => state.entities[state.selectedCustomerId]
);