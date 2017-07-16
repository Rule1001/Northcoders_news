import React from 'react';
import PropTypes from 'prop-types';
// import '../css/TopicsBar.css';

const TopicItem = function (props) {

  return (

      <div className="topicsItem">
        <ul>
          <li><a>{props.topic}</a></li>
        </ul>
      </div>
  );
};

TopicItem.propTypes = {
  topic: PropTypes.string.isRequired,

};

export default TopicItem;
