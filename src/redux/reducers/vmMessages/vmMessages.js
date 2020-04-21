import {
  GET_VM_MESSAGES_START,
  GET_VM_MESSAGES_SUCCESS,
  GET_VM_MESSAGES_ERROR,
} from "./../../utils/actions";

// Default State
const vmMessagesDefaultState = {
  messages: [],
  loading: true,
  error: null,
};

export default (state = vmMessagesDefaultState, action) => {
  switch (action.type) {
    case GET_VM_MESSAGES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_VM_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages,
        loading: false,
        error: false,
      };
    case GET_VM_MESSAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
