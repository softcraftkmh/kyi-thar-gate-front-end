import * as types from "../actionTypes";

const INITIAL_STATE = {
  message: "ERROR",
  type: "ERROR"
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.SET_INFO_ALERT:
      return {
        message: payload.message,
        type: "INFO"
      };
    case types.SET_ERROR_ALERT:
      return {
        message: payload.message,
        type: "ERROR"
      };
    case types.RESET_ALERT:
      return {
        ...state
      };
    default:
      return state;
  }
};
