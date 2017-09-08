import React from 'react';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import * as actions from '../actions/article.actions';
import PropTypes from 'prop-types';

class HomePage extends React.Component {

  componentDidMount () {
    this.props.fetchArticles();

  }
  
  render () {
    console.log(this.props.articles);
    const {articles} = this.props;
    return (
      <div className="columns">
        {this.props.loading && (
              <Spinner name="pacman" color="coral" fadeIn="none" />
        )}
        <ArticleList articles={articles} />
      </div>
    );
  }
}

function mapDispatchedToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data,
    loading: state.loading
  };
}

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchedToProps)(HomePage);

