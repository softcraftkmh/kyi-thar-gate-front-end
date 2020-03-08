import { combineEpics } from "redux-observable";

import { postVoucherEpic } from "./voucher";
import { setErrorAlertEpic, setInfoAlertEpic } from "./alert";

export const rootEpic = combineEpics(
  postVoucherEpic,
  setErrorAlertEpic,
  setInfoAlertEpic
);
