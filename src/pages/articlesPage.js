import React from 'react';
import ReactDom from 'react-dom';

import PageHeading from '../components/PageHeading';
import Article from '../components/Article';
import {articles} from '../cms/content.json';

let article;
const articlesBuilt = [];

articles.sort((a, b) => {
    return Date.parse(b.date) > Date.parse(a.date); //but have to have the proper date strings in the json. Need to validate..
});

for (article of articles) {
    articlesBuilt.push(
        <Article
            key={article.name}
            articleName={article.name}
            articleTitle={article.title}
            articleSubtitle={article.subtitle}
            articleBody={article.body}
            articleAuthor={article.author}
            articleDate={article.date}
            articleType={article.type}
        />
    )
};

const articlesPage = () => (
    <main className="articles">
        <PageHeading>Articles</PageHeading>
        <section className="row">
                {articlesBuilt}
        </section>
    </main>
);

export default articlesPage;