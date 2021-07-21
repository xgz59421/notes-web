import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { addEntityTodo, deleteEntityTodo } from '../actions/todo-entity.actions';


export const todoEntityFeatureKey = 'todoEntity';


export interface EntityTodo {
  id: string
  title: string
}

export interface State extends EntityState<EntityTodo> {}

export const adapter: EntityAdapter<EntityTodo> = createEntityAdapter<EntityTodo>()
export const initialState: State = adapter.getInitialState()

export const reducer = createReducer(
  initialState, 
  on(addEntityTodo, 
    (state, action)=>adapter.addOne({
      id: uuidv4(),
      title: action.title
    },
    state)),
  on(deleteEntityTodo, (state, action) =>adapter.removeOne(action.id, state))
);


