import * as types from '../actions/types';
//import initialState from './initialState';

// const initialState = {
//   data: [],
//   loading: false,
//   error: null
// };

const initialState = {
    data: [],
    topicArticles: [],
    article: {},
    comments: [],
    users: {},
    topics: [],
    selectedTopic: null,
    loading: false,
    error: null,
  };

function articlesReducer (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLES_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.data = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.data = [];
    newState.loading = false;
    return newState;
  }


  return prevState;
}

export default articlesReducer;