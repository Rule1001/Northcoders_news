import React from 'react';
import ArticleCard from './ArticleCard';
import { connect } from 'react-redux';
import * as actions from '../actions/topics.actions';
import TopicItem from './TopicItem';
import Spinner from 'react-spinkit'


const topics = [{ topic: 'football' },
{ topic: 'cooking' },
{ topic: 'coding' }];

class TopicsHeader extends React.Component {
  componentDidMount() {
    this.props.fetchTopics();
  }
  render() {
    return (
      <div className="columns">
        <div className="column is-12">
        <div id='TopicsHeader'>
          {this.props.topics.map(topic => <TopicItem topic={topic.title} key={topic._id} />)}
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