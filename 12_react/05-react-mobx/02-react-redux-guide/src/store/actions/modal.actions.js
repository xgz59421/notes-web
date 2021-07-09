import { SHOWMODAL, HIDEMODAL, SHOWMODAL_ASYNC } from "../const/modal.const";

export const show = () => ({type: SHOWMODAL});
export const hide = () => ({type: HIDEMODAL});

// saga 中间件
export const show_async = () => ({type: SHOWMODAL_ASYNC});

// thunk 中间件
// export const show_async = () => dispatch => {
//   setTimeout(() => {
//     dispatch(show())
//   }, 2000);
// }