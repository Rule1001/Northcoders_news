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
import reducer from './reducer/index';
import Homepage from './pages/Homepage';
import Topics from './pages/Topics';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const history = createBrowserHistory();

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/topics/:topic_id/articles' component={Topics} />
      </Switch>
    </App>
  </Router>
</Provider>, document.getElementById('app'));
