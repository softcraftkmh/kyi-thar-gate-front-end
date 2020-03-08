import * as types from "../actionTypes";

const INITIAL_STATE = {
  isLoading: false,
  error: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.POST_VOUCHER:
      return {
        ...state,
        isLoading: true
      };
    case types.POST_VOUCHER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case types.POST_VOUCHER_ERROR:
      return {
        ...state,
        error: payload.error,
        isLoading: false
      };
    default:
      return state;
  }
};
