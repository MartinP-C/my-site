import React from 'react';
import ReactDom from 'react-dom';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';

import gasketPage from './gasketPage';

import Demo from '../components/Demo';
import { demos } from '../cms/content.json';

let demo;
const demosBuilt = [];

for (demo of demos) {
    demosBuilt.push(
        <Demo
            key={demo.name}
            demoImage={demo.image}
            demoDescriptionHeading={demo.descriptionHeading}
            demoDescription={demo.description}
            demoPage={demo.page}
        />
    );
}

const demosPage = () => (
        <Switch>
            <Route
                exact path="/demos/gasket"
                render={({location}) => (
                    <gasketPage location={location} />
                )}
            />
            <Route
            exact path="/demos"
            render={() => (
                <main className="demos">
                    <h1>Demos</h1>
                    <section className="row">
                            {demosBuilt}
                    </section>
                </main>
            )}
            />
      <Route component={PageNotFound} />
      </Switch>
);

export default demosPage;