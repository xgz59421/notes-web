
import { createFeatureSelector, createSelector } from "@ngrx/store"
import { counterFeatureKey, State } from "../reducers/counter.reducer"
import { AppState } from ".."

export const selectCounter = createFeatureSelector<AppState, State>(counterFeatureKey)
export const selectCount = createSelector(selectCounter, state => state.count)