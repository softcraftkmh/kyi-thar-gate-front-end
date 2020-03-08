import * as types from "../actionTypes";

export const setInfoAlert = payload => ({
  type: types.SET_INFO_ALERT,
  payload
});

export const setErrorAlert = payload => ({
  type: types.SET_ERROR_ALERT,
  payload
});

export const resetAlert = () => ({
  type: types.RESET_ALERT
});
