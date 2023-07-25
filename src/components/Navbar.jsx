import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ol>
        <Link to='/about-us'>О нас</Link>
        <Link to='/questionary'>Заполнить анкету</Link>
      </ol>
    </nav>
  )
};

export default Navbar;
