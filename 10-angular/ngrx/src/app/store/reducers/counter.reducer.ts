import { /*Action,*/ createReducer, on } from '@ngrx/store';
import { decrement, increment } from "../actions/counter.actions"


export const counterFeatureKey = 'counter';

export interface State {
  count: number
}

export const initialState: State = {
  count: 0
}

export const reducer = createReducer(
  initialState,
  // on(increment, state => ({ count: state.count + 1 })),
  on(increment, (state, action) => ({ count: state.count + action.count })),
  on(decrement, state => ({ count: state.count - 1 }))
)

