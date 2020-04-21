import { combineReducers } from "redux";
import vmMessagesReducer from "./vmMessages/vmMessages";

export default combineReducers({
  vmMessages: vmMessagesReducer,
});
