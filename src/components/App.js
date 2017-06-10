import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

import s from '../assets/sass/core.scss';

import Header from './Header';
import Footer from './Footer';
import homePage from '../pages/homePage';
import skillsPage from '../pages/skillsPage';
import demosPage from '../pages/demosPage';
import gasketPage from '../pages/gasketPage';
import articlesPage from '../pages/articlesPage';
import contactPage from '../pages/contactPage';

/*TODO.
  Page not found module..
  Use sass variables.
  Check responsiveness.
  Gasket page.
  Single Article page.
  Accessibility.
  Content from html into content.json
  Some kind of CMS?
*/


export default function App() {
    return (
      <div id="AppRoot">
        <Header />

        <main className="container-fluid">
          <Switch className="switch">
            <Route exact path="/" component={homePage} />
            <Route path="/skills" component={skillsPage} />
            <Route path="/demos" component={demosPage} />
            <Route path="/articles" component={articlesPage} />
            <Route path="/contact" component={contactPage} />
            <Route component={PageNotFound} />
          </Switch>
        </main>

        <Footer />
      </div>
    );
}
