export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREMENT_ASYNC = 'increment_async';

export const increment = payload => ({type: INCREMENT, payload});
export const decrement = payload => ({type: DECREMENT, payload});

export const increment_async = payload => ({type: INCREMENT_ASYNC, payload});