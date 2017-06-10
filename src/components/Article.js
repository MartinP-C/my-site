import React from 'react';

import AccordianArticle from './DefaultArticle';
import DefaultArticle from './DefaultArticle';

function returnArticle(props) {
    if (props.articleType === 'accordian') {
        return <AccordianArticle
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
                />
    }
}

const Article = (props) => (
    returnArticle(props)
)

export default Article;