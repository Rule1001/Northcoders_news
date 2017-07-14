import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/bulma.css';
import './css/font-awesome.css';
import logger from 'redux-logger';


import App from './components/App';
import ArticleList from './components/ArticleList';
import reducer from './reducer/index';
import Homepage from './pages/Homepage';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <App>
      <Switch>
        <Route path='/' component={Homepage} />
        <Route path='/articles/:topic_id' component={ArticleList} />
      </Switch>
    </App>
  </Router>
</Provider>, document.getElementById('app'));
