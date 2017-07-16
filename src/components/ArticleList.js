import React from 'react';
import ArticleCard from './ArticleCard';
import PropTypes from 'prop-types';

const articles = [{ title: 'I\'m an article', votes: 4 },
{ title: 'I\'m another article', votes: 5 },
{ title: 'I\'m an article too', votes: 2 }];

class ArticleList extends React.Component {
  render () {
    return (
      <div id="ArticleList">
        {articles.map(article => <ArticleCard title={article.title} votes={article.votes} key={article.title} />)}
      </div>
    );
  }
}

// ArticleList.propTypes = {
//   articles: PropTypes.array.isRequired
// };

export default ArticleList;