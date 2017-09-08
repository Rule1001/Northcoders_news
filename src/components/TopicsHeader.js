import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/topics.actions';
import { Link } from 'react-router-dom';

class TopicsHeader extends React.Component {
  componentDidMount () {
    this.props.fetchTopics ();
  }
  render () {
    return (
      <div className="columns">
        <div className="column is-12">
          <div id='TopicsHeader'>
            {this.props.topics.map(topic => <Link key={topic.slug} to={`/topics/${topic.slug}/articles`}>{topic.slug}</Link>)}
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchedToProps (dispatch) {
  return {
    fetchTopics: () => {
      dispatch(actions.fetchTopics());
    }
  };
}

function mapStateToProps (state) {
  return {
    topics: state.topics.data
  };
}

TopicsHeader.propTypes = {
  fetchTopics: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchedToProps)(TopicsHeader);