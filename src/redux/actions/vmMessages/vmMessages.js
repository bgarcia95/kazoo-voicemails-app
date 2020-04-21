import axiosClient from "./../../../config/axiosClient";
import {
  GET_VM_MESSAGES_START,
  GET_VM_MESSAGES_SUCCESS,
  GET_VM_MESSAGES_ERROR,
} from "../../utils/actions";
import {
  REACT_APP_ACCOUNT_ID,
  REACT_APP_VM_BOX_ID,
} from "../../../utils/constants";

// GET METHODS

export const getVmMessagesStart = () => ({
  type: GET_VM_MESSAGES_START,
});

export const getVmMessagesSuccess = (messages) => ({
  type: GET_VM_MESSAGES_SUCCESS,
  messages,
});

export const getVmMessagesError = () => ({
  type: GET_VM_MESSAGES_ERROR,
});

export const getVmMessagesAction = () => {
  return (dispatch) => {
    dispatch(getVmMessagesStart);

    // Fetch data from API
    axiosClient
      .get(
        `/accounts/${REACT_APP_ACCOUNT_ID}/vmboxes/${REACT_APP_VM_BOX_ID}/messages`
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
};
