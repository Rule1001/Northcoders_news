import React from 'react';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import * as actions from '../actions/article.actions';
import PropTypes from 'prop-types';


class Topics extends React.Component {

  componentDidMount () {
    this.props.fetchArticles (this.props.match.params.topic_id);
  }

  componentWillReceiveProps (newProps) {
    const newId = newProps.match.params.topic_id;
    if (newId !== this.props.match.params.topic_id) {
      this.props.fetchArticles(newId);
    }
  }

  render () {
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
    fetchArticles: (id) => {
      dispatch(actions.fetchArticles(id));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data,
    loading: state.articles.loading
  };
}

Topics.propTypes = {
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchedToProps)(Topics);

