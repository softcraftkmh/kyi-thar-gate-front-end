import { ofType } from "redux-observable";

import * as types from "../actionTypes";
import { tap, delay } from "rxjs/operators";
import actions from "store/actions";

export const setInfoAlertEpic = action$ => {
  return action$.pipe(
    ofType(types.SET_INFO_ALERT),
    tap(action => actions.setInfoAlert(action.payload)),
    delay(1000),
    tap(() => actions.resetAlert())
  );
};

export const setErrorAlertEpic = action$ => {
  return action$.pipe(
    ofType(types.SET_ERROR_ALERT),
    tap(action => actions.setErrorAlert(action.payload)),
    delay(1000),
    tap(() => actions.resetAlert())
  );
};
