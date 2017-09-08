import * as types from './types';
import axios from 'axios';
import { ROOT } from '../../config';

export function fetchArticles (topic) {

  return function (dispatch) {
    dispatch(fetchArticlesRequest());

    let route;
    route = topic === undefined ? 'articles' : `topics/${topic}/articles`;   
    axios.get(`${ROOT}/${route}`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(err => {
        dispatch(fetchArticlesError(err));
      });
  };
}


export function fetchArticlesRequest () {
  return {
    type: types.FETCH_ARTICLES_REQUEST
  };
}

export function fetchArticlesSuccess (articles) {
  return {
    type: types.FETCH_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function fetchArticlesError (error) {
  return {
    type: types.FETCH_ARTICLES_ERROR,
    payload: error
  };
}

