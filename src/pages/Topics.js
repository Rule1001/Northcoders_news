import React from 'react';
import ArticleCard from './ArticleCard';
import { connect } from 'react-redux';
import * as actions from '../actions/article.actions';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';


class ArticleList extends React.Component {

  componentDidMount() {
    this.props.fetchArticles(this.props.match.params.topic_id);

  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.topic_id !== this.props.match.params.topic_id) {
      this.props.fetchArticles(newProps.match.params.topic_id);
    }
  }

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

function mapDispatchedToProps(dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles())
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.data,
    loading: state.loading
  }
}

ArticleList.propTypes = {
  title: PropTypes.string.isRequired,

};

export default connect(mapStateToProps, mapDispatchedToProps)(ArticleList);

