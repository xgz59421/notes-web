import { SHOWMODAL, HIDEMODAL } from "../actions/modal.actions";

const initialState = {
  show: false
}
export default (state = initialState, action) => {
  console.log('modal reducer');
  switch(action.type) {
    case SHOWMODAL:
      return {
        ...state,
        show: true
      }
    case HIDEMODAL:
      return {
        ...state,
        show: false
      }
    default: 
      return state;
  }
}