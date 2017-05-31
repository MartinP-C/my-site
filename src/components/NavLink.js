import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => (
    <li className="nav-item">
        <Link
        className="nav-link"
        data-toggle="collapse"
        data-target="#navbar-menu"
        to={props.to}
        >
            {props.text}
        </Link>
    </li>
);

export default NavLink;