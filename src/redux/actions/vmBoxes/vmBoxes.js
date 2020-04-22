import axiosClient from "./../../../config/axiosClient";
import {
  GET_VM_BOXES_START,
  GET_VM_BOXES_SUCCESS,
  GET_VM_BOXES_ERROR,
} from "../../utils/actions";
import { REACT_APP_ACCOUNT_ID } from "../../../utils/constants";

export const getVmBoxesStart = () => ({
  type: GET_VM_BOXES_START,
});

export const getVmBoxesSuccess = (boxes) => ({
  type: GET_VM_BOXES_SUCCESS,
  boxes,
});

export const getVmBoxesError = () => ({
  type: GET_VM_BOXES_ERROR,
});

export const getVmBoxesAction = () => {
  return (dispatch) => {
    dispatch(getVmBoxesStart());

    axiosClient
      .get(`/accounts/${REACT_APP_ACCOUNT_ID}/vmboxes`)
      .then((response) => {
        dispatch(getVmBoxesSuccess(response.data.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getVmBoxesError());
      });
  };
};
