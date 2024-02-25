import React from "react";
import { Link } from 'react-router-dom';


function Nav() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/project">Réalisation</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Me Contacter</Link></li>
        </ul>
      </nav>
    );
  }

export default Nav;