import { combineReducers } from "redux";
import vmMessagesReducer from "./vmMessages/vmMessages";
import vmBoxesReducer from "./vmBoxes/vmBoxes";
export default combineReducers({
  vmMessages: vmMessagesReducer,
  vmBoxes: vmBoxesReducer,
});
