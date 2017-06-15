import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

import s from '../assets/sass/main.scss';

import Header from './Header';
import Footer from './Footer';
import homePage from '../pages/homePage';
import skillsPage from '../pages/skillsPage';
import demosPage from '../pages/demosPage';
import GasketPage from '../pages/GasketPage';
import articlesPage from '../pages/articlesPage';
import contactPage from '../pages/contactPage';
import articlePage from '../pages/articlePage';

/*TODO.
  Page container class?
  sort path names between local dev and github. /my-site/build vs /build
  dynamic demo pages
  BBC GEL grid?
  BEM/OOCSS/ITCSS?
  style of hover lists when on touch
  Page not found module..
  Use sass variables.
  Check responsiveness.
  Gasket page.
  Single Article page.
  Accessibility.
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
            <Route path="/demos/gasket" component={GasketPage} />
            <Route path="/demos" component={demosPage} />
            <Route path="/articles" component={articlesPage} />
            <Route path="/article/:name" component={articlePage} />
            <Route path="/contact" component={contactPage} />
            <Route component={PageNotFound} />
          </Switch>
        </main>

        <Footer />
      </div>
    );
}
