import React from 'react';
import ReactDom from 'react-dom';

const ArticlePage = ({ match }) => (
    <div>
        <p>Article is: {match.params.name}</p>
        <p>Needs to be built.</p>
    </div>
)

export default ArticlePage;