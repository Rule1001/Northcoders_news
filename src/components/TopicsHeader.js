import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/topics.actions';
import TopicItem from './TopicItem';
import { Link } from 'react-router-dom';

class TopicsHeader extends React.Component {
  componentDidMount() {
    this.props.fetchTopics();
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-12" background-color="rgb(240,225,165)">
          <div id='TopicsHeader'>
            {this.props.topics.map(topic => <Link to={`/topics/${topic.slug}/articles`}>{topic.slug}</Link>)}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchedToProps(dispatch) {
  return {
    fetchTopics: () => {
      dispatch(actions.fetchTopics())
    }
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics.data,
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchedToProps)(TopicsHeader);