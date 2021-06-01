import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '../models/post.model';
import { PostsState } from './posts.state';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostState, (state) => state.posts);

export const getPostById = createSelector(
  getPostState,
  (state: any, props: any) =>
    state.posts.find((post: Post) => post.id === props.id)
);
