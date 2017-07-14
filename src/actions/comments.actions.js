import * as types from './types';
import axios from 'axios';
import { ROOT } from '../../config';

export function fetchComments() {
  return function (dispatch) {
    dispatch(fetchCommentsRequest());
    axios.get(`${ROOT}/articles`)
      .then(res => {
        dispatch(fetchCommentsSucess(res.data.comments));
      })
      .catch(err => {
        dispatch(fetchCommentsError(err));
      })

  };
}
export function fetchCommentsRequest() {
  return {
    type: types.FETCH_COMMENTS_REQUEST
  };
}

export function fetchCommentsSucess(articles) {
  return {
    type: types.FETCH_COMMENTS_SUCCESS,
    payload: articles
  };
}

export function fetchCommentsError(error) {
  return {
    type: types.FETCH_COMMENTS_ERROR,
    payload: error
  };
}
