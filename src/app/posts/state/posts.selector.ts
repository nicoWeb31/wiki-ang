import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '../models/post.model';
import { PostsState } from './posts.state';


export const POST_STATE_NAME = 'posts';

const getPostState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostState, (state) => state.posts);

export const getPostById = createSelector(
  getPostState,
  (state: any, props: any) =>
    state.posts.find((post: Post) => post.id === props.id)
);
