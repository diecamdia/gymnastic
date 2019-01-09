import * as fromApp from './app.reducer';
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
    UI: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
    UI: fromApp.reducer
}

//Selector functions
const getProductFeatureState = createFeatureSelector<fromApp.State>('UI');

// export const getIsSubdomain = createSelector(
//     getProductFeatureState,
//     state => state.isSubdomain
// );
