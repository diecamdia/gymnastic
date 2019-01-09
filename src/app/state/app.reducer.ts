import { Action } from '@ngrx/store';
import { AppActions, AppActionTypes } from './app.actions';
import { ToastrModel } from "../models/toastr.model";

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
    toastr: ToastrModel | null;
}

const initialState: State = {
    toastr: null,
};

export function reducer(state = initialState, action: AppActions): State {
    switch (action.type) {

        default:
            return state;
    }
}
