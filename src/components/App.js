import React from 'react';
import PropTypes from 'prop-types';
import TopicsHeader from './TopicsHeader';
import ArticleList from './ArticleList';
import NavBar from './NavBar';
// import '../css/AppLayout.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
         {/* <div>
          <TopicsHeader />
        </div>  */}
         <div>
          {this.props.children}
        </div> 
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;