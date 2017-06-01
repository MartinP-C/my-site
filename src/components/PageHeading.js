import React from 'react';
import ReactDom from 'react-dom';

const PageHeading = (props) => (
    <section className="row heading-row">
        <div className="col-md-12">
            <h1>
                {props.children}
            </h1>
        </div>
    </section>
)

export default PageHeading;