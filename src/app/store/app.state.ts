import { authReducer as AuthReducer } from "../auth/state/auth.reducer";
import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";
import { sharedReducer as SharedReducer } from "../shared/state/shared.reducer";
import { SHARED_STATE_NAME } from "../shared/state/shared.selector";
import { SharedState } from "../shared/state/shared.state";

export interface AppState {
[SHARED_STATE_NAME] : SharedState;
[AUTH_STATE_NAME] : AuthState;
}


export const appReducer = {
  [SHARED_STATE_NAME] : SharedReducer,
  [AUTH_STATE_NAME] : AuthReducer
}

