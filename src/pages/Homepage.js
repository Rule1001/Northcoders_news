import React from 'react';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import * as actions from '../actions/article.actions';
import PropTypes from 'prop-types';


class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchArticles();

  }
  
  render() {
        console.log(this.props.articles)
    return (
      <div className="columns">
        <ArticleList title={this.props.title} votes={this.props.votes} key={this.props._id} />
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

HomePage.propTypes = {
  title: PropTypes.string.isRequired,

};

export default connect(mapStateToProps, mapDispatchedToProps)(HomePage);

