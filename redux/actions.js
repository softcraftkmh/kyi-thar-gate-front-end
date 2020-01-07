import * as types from "./actionTypes";

export const fetchVideos = () => ({
  type: types.FETCH_VIDEOS
});

export const fetchVideosSuccess = response => ({
  type: types.FETCH_VIDEOS_SUCCESS,
  payload: response
});

export const fetchVideosFailure = error => ({
  type: types.FETCH_VIDEOS_ERROR,
  payload: { error }
});
