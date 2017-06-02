import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';

function ArticleLink (props) {
    if (props.articleType === 'click-here-to-read') {
        return (
            <Link to={`/articles/${props.articleName}`}>
                Click here to read
            </Link>
        );
    } else if (props.articleType === 'js-accordian') {
        return (
            <div className="accordian-click-to-expand">+ Click to expand</div>
        );
    } else {
        return null;
    }
}

const Article = (props) => (


    <div className="col-md-12">
    <article className={`article-container ${props.articleType}`}>
        <h2>{props.articleTitle}</h2>
        <h3>{props.articleSubtitle}</h3>
        <section dangerouslySetInnerHTML={
            {__html: props.articleBody}
        }></section>
        <ArticleLink articleType={props.articleType} articleName={props.articleName} />
        <footer className="article-footer">
            <span className="article-author">Author: {props.articleAuthor}</span>
            <span className="article-date">Date: {props.articleDate}</span>
        </footer>
    </article>
    </div>
)

export default Article;