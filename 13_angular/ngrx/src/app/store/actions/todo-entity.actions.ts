import { createAction, props } from '@ngrx/store';

export const addEntityTodo = createAction("addEntityTodo", props<{title: string}>())
export const deleteEntityTodo = createAction("deleteEntityTodo", props<{id: string}>())



