import * as types from "../actionTypes";

export const postVoucher = payload => ({
  type: types.POST_VOUCHER,
  payload
});

export const postVoucherSuccess = response => ({
  type: types.POST_VOUCHER_SUCCESS,
  payload: response
});

export const postVoucherFailure = error => ({
  type: types.POST_VOUCHER_ERROR,
  payload: error
});
