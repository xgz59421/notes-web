import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '..';
import { adapter, State, todoEntityFeatureKey } from '../reducers/todo-entity.reducer';
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectEntityTodo = createFeatureSelector<AppState, State>(todoEntityFeatureKey);

export const selectEntityTodos = createSelector(selectEntityTodo, selectAll);