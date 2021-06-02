import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, editPost } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    // post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(editPost, (state, action) => {
    const updatePosts = state.posts.map(post => {
      return action.post.id === post.id ? action.post : post;
    })
    return {
      ...state,
      posts: updatePosts
    }
  }),
  on(deletePost, (state, action) => {
    const updatePost = state.posts.filter(post => post.id !== action.id)
    return {
      ...state,
      posts: updatePost
    }
  })
);

export const postsReducer = (state: any, action: any) => {
  return _postsReducer(state, action);
};
