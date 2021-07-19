import { createAction, props } from '@ngrx/store';


// export const increment = createAction("increment")
export const increment = createAction("increment", props<{ count: number }>())
export const increment_async = createAction("increment_async")
export const decrement = createAction("decrement")



