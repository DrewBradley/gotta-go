import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
      <nav>
        <Link to="/">logo here</Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar;