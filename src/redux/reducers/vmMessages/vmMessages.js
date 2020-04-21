import {
  GET_VM_MESSAGES_START,
  GET_VM_MESSAGES_SUCCESS,
  GET_VM_MESSAGES_ERROR,
  START_VM_MESSAGE_UPDATE,
  VM_MESSAGE_UPDATE_SUCCESS,
  VM_MESSAGE_UPDATE_ERROR,
} from "./../../utils/actions";

// Default State
const vmMessagesDefaultState = {
  messages: [],
  isLoading: true,
  error: null,
  isProcessing: false,
};

export default (state = vmMessagesDefaultState, action) => {
  switch (action.type) {
    case GET_VM_MESSAGES_START:
      return {
        ...state,
      };
    case GET_VM_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.messages,
        isLoading: false,
        error: false,
      };
    case GET_VM_MESSAGES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case START_VM_MESSAGE_UPDATE:
      return {
        ...state,
        isProcessing: true,
        error: null,
      };
    case VM_MESSAGE_UPDATE_SUCCESS:
      return {
        ...state,
        error: null,
        messages: state.messages.map((message) =>
          message["media_id"] === action.message["media_id"]
            ? (message = action.message)
            : message
        ),
        isProcessing: false,
      };
    case VM_MESSAGE_UPDATE_ERROR:
      return {
        ...state,
        error: true,
        isProcessing: false,
      };
    default:
      return state;
  }
};
