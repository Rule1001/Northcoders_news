import React from 'react';
import PropTypes from 'prop-types';
// import '../css/AppLayout.css';
import '../css/NavBar.css';

class NavBar extends React.Component {
  render () {
    return (
      <nav className="navbar">

          <img className="navbar-brand" src="https://northcoders.com/images/logos/learn_to_code_manchester_original_second.png" alt="Bulma logo" />

          <a className="navbar-item">
            Topic1
          </a>

          <a className="navbar-item">
            Topic2
          </a>

          <a className="navbar-item">
            Topic3
          </a>
          
      </nav>
    );
  }
}

export default NavBar;