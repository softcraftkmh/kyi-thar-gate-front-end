import { interval, of } from "rxjs";
import { takeUntil, mergeMap, catchError, map, tap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { request } from "universal-rxjs-ajax";

import * as actions from "./actions";
import * as types from "./actionTypes";

export const fetchVideosEpic = action$ => {
  return action$.pipe(
    ofType(types.FETCH_VIDEOS),
    mergeMap(() =>
      request({
        url: "http://localhost:3300/videos"
      }).pipe(
        map(response => actions.fetchVideosSuccess(response.response)),
        catchError(error => of(actions.fetchVideosFailure(error.xhr.response)))
      )
    )
  );
};

export const rootEpic = combineEpics(fetchVideosEpic);
