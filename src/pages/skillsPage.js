import React from 'react';
import ReactDom from 'react-dom';

import PageHeading from '../components/PageHeading';
import CollapsingList from '../components/CollapsingList';

class skillsPage extends React.Component {
    constructor() {
        super ();
    }

    render () {
        return (
            <div className="skills">
                <section className="row justify-content-center">
                    <div className="col-md-6">
                        <PageHeading>Skills</PageHeading>
                        <ul className="styled-list">
                            <CollapsingList heading="HTML" />
                            <CollapsingList heading="CSS" subList={['SASS','LESS']} />
                            <CollapsingList heading="Javascript" subList={['ES6','React','Node']} />
                            <CollapsingList heading="C#" subList={['ASP.Net Core']} />
                            <CollapsingList heading="CMS" subList={['Umbraco']} />
                            <CollapsingList heading="Others">
                                <CollapsingList heading="Programming" subList={['Ruby', 'Python']} />
                                <CollapsingList heading="Tools">
                                    <CollapsingList heading="SCM" subList={['git', 'SVN', 'SourceTree']} />
                                    <CollapsingList heading="IDEs/Editors" subList={['Visual Studio Code', 'Visual Studio 2015/2017','Sublime']} />
                                    <CollapsingList heading="CI" subList={['Bamboo', 'Octopus']} />
                                </CollapsingList>
                            </CollapsingList>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <PageHeading>
                            Experience
                        </PageHeading>
                        <p>
                            Front-end on large brand, cross-country websites.<br/>
                            Working with project managers and design to exceed client expectations.
                        </p>
                        <p>
                            Front-end and back-end for product website.
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}

export default skillsPage;