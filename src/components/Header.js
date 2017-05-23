import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import bookImage from '../assets/images/book.svg';


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
        <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
            >Home</Link>
        </li>
        <li className="nav-item">
            <Link
              className="nav-link"
              to="/skills"
            >Skills</Link>
        </li>
        <li className="nav-item">
            <Link
              className="nav-link"
              to="/demos"
            >Demos</Link>
        </li>
        <li className="nav-item">
            <Link
              className="nav-link"
              to="/articles"
            >Articles</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default Header