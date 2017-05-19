import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import s from '../assets/sass/core.scss';

import Header from './Header';
import Footer from './Footer';
import homePage from '../pages/homePage';
import skillsPage from '../pages/skillsPage';

export default function App() {
    return (
      <div style={s.root}>
        <h1 style={s.title}>Single Page Apps for GitHub Pages</h1>
        <Interactive
          as="a"
          href="https://github.com/rafrex/spa-github-pages"
          style={s.repoLink}
          {...s.link}
        >https://github.com/rafrex/spa-github-pages</Interactive>

        <Header />

        <Switch>
          <Route exact path="/" component={homePage} />
          <Route path="/testofSPA" component={homePage} />
          <Route path="/skills" component={skillsPage} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );
}
