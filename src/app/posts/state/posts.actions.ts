import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.model";

export const ADD_POST_ACTION = '[post page] add post';
export const EDIT_POST_ACTION= '[ post page ] edit post';
export const DELETE_POST_ACTION= '[ post page ] delete post';


export const addPost = createAction(ADD_POST_ACTION, props<{post : Post}>());
export const editPost = createAction(EDIT_POST_ACTION, props<{post : Post}>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{id : string}>());
