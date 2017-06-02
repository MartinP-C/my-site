import React from 'react';
import ReactDom from 'react-dom';

import PageHeading from '../components/PageHeading';

import meImage from '../assets/images/me.jpg';

const indexPage = (props) => (
    <div className="home">
        <PageHeading>
            Martin Powlesland-Cook
        </PageHeading>
        <article className="row">
            <div className="col-sm-8">
                <p>Front-end developer progressing to full-stack.</p>
                <p>Excited by web development and always striving to improve.</p>
                <p>Great at understanding requirements and client intent.</p>
                <p>Works very well with any department or person to exceed client expectations.</p>
            </div>
            <div className="col-sm-4"><img className="me" src={meImage} alt="Cheesy Picture of Martin"/></div>
        </article>
        <article className="row">
            <div className="col-md-12">
                <p>This whole site is a demo but also includes a portfolio of skills.</p>
                <p>Take a look around here and see the source on the <a href="https://github.com/MartinP-C/my-site">repo</a>. This is only the start so there will be a lot more to come!</p>
                <p>Made with React and Webpack. See the <a href="https://github.com/MartinP-C/my-site">repo</a>.</p>
                <p>It's maybe slightly over-the-top fitting a React SPA on github pages but it was a fun challenge.<br/>
                <a href="https://github.com/rafrex/spa-github-pages">SPA Github Pages</a> package solved all the problems with routing. It's worth a <a href="https://github.com/rafrex/spa-github-pages">look</a>.
                </p>
            </div>
        </article>
    </div>
)

export default indexPage;