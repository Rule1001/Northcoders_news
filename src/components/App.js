import React from 'react';
import PropTypes from 'prop-types';
import TopicsHeader from './TopicsHeader';
import ArticlesList from './ArticleList';
import '../css/AppLayout.css';

class App extends React.Component {
  render () {
    return (

      <div className="appLayout">
        <div>
          <TopicsHeader />
        </div>
        <div>
          <nav className="nav">
            <div className="nav-left">
              <a className="nav-item">
                <img src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" alt="Bulma logo" /></a>
              <a className="nav-item">Home</a>
              <a className="nav-item">Hot</a>
              <a className="nav-item">Latest</a>
            </div>
          </nav>
        </div>

        <div>
          <ArticlesList />
        </div>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
