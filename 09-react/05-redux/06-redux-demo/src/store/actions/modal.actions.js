export const SHOWMODAL = 'showModal';
export const HIDEMODAL = 'hideModal';
export const SHOWMODAL_ASYNC = 'showModal_async';

export const show = () => ({type: SHOWMODAL});
export const hide = () => ({type: HIDEMODAL});

// saga 中间件
export const show_async = () => {
  console.log('show_async');
  return ({type: SHOWMODAL_ASYNC})
};

// thunk 中间件
// export const show_async = () => dispatch => {
//   setTimeout(() => {
//     dispatch(show())
//   }, 2000);
// }