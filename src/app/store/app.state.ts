import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { sharedReducer as SharedReducer } from "../shared/state/shared.reducer";
import { SHARED_NAME_REDUCER } from "../shared/state/shared.selector";
import { SharedState } from "../shared/state/shared.state";

export interface AppState {
[SHARED_NAME_REDUCER] : SharedState
}


export const appReducer = {
  [SHARED_NAME_REDUCER] : SharedReducer
}
