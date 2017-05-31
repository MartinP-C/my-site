import React from 'react';
import NavLink from './NavLink';

import bookImage from '../assets/images/book.svg';

/* TODO: Array of links and loop. Array from cms? */

const Header = () => (
    <nav className="navbar navbar-light fixed-top">
  <div className="container-fluid">
    
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/"><img src={bookImage}/></a>
    </div>

    
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul className="nav navbar-nav">
        <NavLink text="Home" to="/" />
        <NavLink text="Skills" to="/skills" />
        <NavLink text="Demos" to="/demos" />
        <NavLink text="Articles" to="/articles" />
        <NavLink text="Contact" to="/contact" />
      </ul>
    </div>
  </div>
</nav>
)

export default Header;