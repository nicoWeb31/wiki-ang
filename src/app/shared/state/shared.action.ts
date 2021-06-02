import { createAction, props } from "@ngrx/store";

export const SET_LOADING_ACTION = '[shared state] show loading';


export const setLoadingSpinner = createAction('setLoadingSpinner', props<{status: boolean}>());


