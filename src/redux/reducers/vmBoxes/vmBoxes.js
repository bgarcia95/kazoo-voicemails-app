import {
  GET_VM_BOXES_START,
  GET_VM_BOXES_SUCCESS,
  GET_VM_BOXES_ERROR,
} from "../../utils/actions";

const voicemailBoxesDefaultState = {
  boxes: [],
  error: null,
  loading: true,
};

export default (state = voicemailBoxesDefaultState, action) => {
  switch (action.type) {
    case GET_VM_BOXES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_VM_BOXES_SUCCESS:
      return {
        ...state,
        boxes: action.boxes,
        loading: false,
        error: false,
      };
    case GET_VM_BOXES_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
