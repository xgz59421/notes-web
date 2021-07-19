import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCounter from './reducers/counter.reducer';
import * as fromTodo from './reducers/todo.reducer';
import * as fromTodoEntity from './reducers/todo-entity.reducer';


export interface AppState {

  [fromCounter.counterFeatureKey]: fromCounter.State;
  [fromTodo.todoFeatureKey]: fromTodo.State;
  [fromTodoEntity.todoEntityFeatureKey]: fromTodoEntity.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromCounter.counterFeatureKey]: fromCounter.reducer,
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
  [fromTodoEntity.todoEntityFeatureKey]: fromTodoEntity.reducer,
};

function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state, action) {
    let result = reducer(state, action)
    console.log('最新的状态', result);
    console.log('上一次状态', state);
    console.log('action', action);
    return result
  }
}

// 相当于中间件
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
