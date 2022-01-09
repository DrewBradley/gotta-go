import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import logo from '../../gottago-logo.png'

const NavBar = () => {
  return (
      <nav>
        <Link to="/"><img className="logo" src={logo} /></Link>
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