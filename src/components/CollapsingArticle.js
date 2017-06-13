import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';

import CollapsingComponent from './baseComponents/CollapsingComponent';

class CollapsingArticle extends CollapsingComponent {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="col-md-12">
                <article className={`article-container ${this.state.collapsedClassName}`}>
                    <h2>{this.props.articleTitle}</h2>
                    <h3>{this.props.articleSubtitle}</h3>
                    <div className="click-to-expand" onClick={this.handleClick.bind(this)}>
                        Click here to show full article
                    </div>
                    <section className={this.targetClassName} dangerouslySetInnerHTML={
                        {__html: this.props.articleBody}
                    }></section>
                    <footer className="article-footer">
                        <span className="article-author">
                            Author: {this.props.articleAuthor}
                        </span>
                        <span className="article-date">
                            Date: {this.props.articleDate}
                        </span>
                    </footer>
                </article>
            </div>
        )
    }
}


export default CollapsingArticle;