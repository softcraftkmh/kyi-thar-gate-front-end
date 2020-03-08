import { of } from "rxjs";
import { mergeMap, catchError, map } from "rxjs/operators";
import { request } from "universal-rxjs-ajax";
import { ofType } from "redux-observable";

import actions from "../actions";
import * as types from "../actionTypes";

export const postVoucherEpic = action$ => {
  return action$.pipe(
    ofType(types.POST_VOUCHER),
    mergeMap(action =>
      request({
        url: "http://localhost:3030/vouchers",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: action.payload
      }).pipe(
        map(r => actions.postVoucherSuccess(r.response)),
        catchError(e => of(actions.postVoucherFailure(e.xhr.response)))
      )
    )
  );
};
