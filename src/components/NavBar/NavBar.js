import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
      <nav>
        <p>logo goes here</p>
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