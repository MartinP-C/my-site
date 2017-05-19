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
import demosPage from '../pages/demosPage';
import articlesPage from '../pages/articlesPage';
import gasketPage from '../pages/gasketPage';

export default function App() {
    return (
      <div style={s.root}>
        <Header />

        <Switch className="switch">
          <Route exact path="/" component={homePage} />
          <Route exact path="/testofSPA/" component={homePage} />
          <Route path="/testofSPA/skills" component={skillsPage} />
          <Route path="/testofSPA/demos" component={demosPage} />
          <Route path="/testofSPA/articles" component={articlesPage} />
          <Route path="/testofSPA/demos/gasket" component={gasketPage} />
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );
}
