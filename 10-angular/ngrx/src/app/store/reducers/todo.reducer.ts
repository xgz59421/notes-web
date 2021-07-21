import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo } from '../actions/todo.actions';
import { v4 as uuidv4 } from 'uuid';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export const todoFeatureKey = 'todo';

export interface Todo {
  id: string
  title: string
}

// 使用entity 简化
// export interface State {
//   todos: Todo[]
// }
export interface State extends EntityState<Todo> {}

// export const initialState: State = {
//   todos: []
// };

// 实体适配器
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>()
export const initialState: State = adapter.getInitialState()
console.log('initialState', initialState);


export const reducer = createReducer(
  initialState, 
  on(addTodo, 
    (state, action)=>adapter.addOne({
      id: uuidv4(),
      title: action.title
    },
    state)),
  on(deleteTodo, (state, action) =>adapter.removeOne(action.id, state))
  // on(addTodo, (state, action)=>({
  //   ...state,
  //   todos: [
  //     ...state.todos,
  //     {
  //       id: uuidv4(),
  //       title: action.title
  //     }
  //   ]
  // })),
  // on(deleteTodo, (state, action) => {
  //   const newState: State = JSON.parse(JSON.stringify(state))
  //   const index = newState.todos.findIndex(todo=> todo.id === action.id)
  //   newState.todos.splice(index, 1)
  //   return newState
  // })
);

