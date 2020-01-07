import * as types from "./actionTypes";

const INITIAL_STATE = {
  videos: []
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case types.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload.fileLists
      };
    case types.FETCH_VIDEOS_ERROR:
      return {
        ...state,
        error: payload.error
      };
    default:
      return state;
  }
}
