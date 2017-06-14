import React from 'react';

import CollapsingArticle from './CollapsingArticle';
import DefaultArticle from './DefaultArticle';

function returnArticle(props) {
    if (props.articleType === 'collapse') {
        return <CollapsingArticle
                    articleTitle={props.articleTitle}
                    articleSubtitle={props.articleSubtitle}
                    articleBody={props.articleBody}
                    articleAuthor={props.articleAuthor}
                    articleDate={props.articleDate}
                />
    } else {
        return <DefaultArticle
                    articleTitle={props.articleTitle}
                    articleSubtitle={props.articleSubtitle}
                    articleBody={props.articleBody}
                    articleAuthor={props.articleAuthor}
                    articleDate={props.articleDate}
                    articleName={props.articleName}
                    articleType={props.articleType}
                />
    }
}

const Article = (props) => (
    returnArticle(props)
)

export default Article;