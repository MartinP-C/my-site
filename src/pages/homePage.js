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
            <div className="col-sm-4"><img className="me" src={meImage} /></div>
        </article>
        <article className="row">
            <div className="col-md-12">
                <p>This whole site is a demo but also inclues a portfolio of skills.</p>
                <p>Made with React and built to static pages. See the <a href="https://github.com/MartinP-C/my-site">repo</a>.</p>
            </div>
        </article>
    </div>
)

export default indexPage;