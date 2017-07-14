import React from 'react';
import ArticleCard from './ArticleCard';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';


class ArticleList extends React.Component {


  render() {
    return (
      <div className="columns">
        <div className="column columns is-multiline">
          <div id='ArticleList'>
            {this.props.loading && (
              <Spinner name="pacman" color="coral" fadeIn="none" />
            )}
            {this.props.articles.map(article => <ArticleCard title={article.title} votes={article.votes} key={article.title} />)}
            <div className="column is-3">
              <div className="box">
                <p>search box</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticleList.propTypes = {
  title: PropTypes.string.isRequired,

};

export default ArticleList;

