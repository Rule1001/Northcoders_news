import React from 'react';
import PropTypes from 'prop-types';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>

        <div className='media-left'>
          <h3>{props.votes} comments</h3>
        </div>

        <div className='media-content'>
          <div className='content'>
            <h3 className='title'>{props.title}</h3>
          </div>
        </div>
        
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default ArticleCard;
