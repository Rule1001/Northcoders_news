import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import topicsReducer from './topicsReducer';

export default combineReducers({
  articles: articlesReducer,
  topics: topicsReducer
});