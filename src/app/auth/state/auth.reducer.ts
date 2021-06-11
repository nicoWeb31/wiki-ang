import { createReducer, on } from '@ngrx/store';
import { loginSuccess, signupSuccess } from './auth.actions';
import { initialState } from './auth.state';

const _authReducer = createReducer(
    initialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user,
        };
    }),
    on(signupSuccess, (state, action) => {
      return {
        ...state,
        action: action.user
      }
    })
);

export const authReducer = (state: any, action: any) => {
    return _authReducer(state, action);
};
