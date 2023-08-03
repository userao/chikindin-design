import React from "react";
import { Link } from "react-router-dom";

// todo
// реализовать переключение страниц
const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a href="/">
          <img className="nav__brand-logo" src="svg/brand_logo.svg" alt="brand logo" />
        </a>
      </div>
      <ul className="nav__links-list-container">
        <li className="nav__link-container">
          <Link className="nav__link" to="/about-us">
            О нас
          </Link>
        </li>
        <li className="nav__link-container">
          <Link className="nav__link" to="/our-work">
            Наши работы
          </Link>
        </li>
        <li className="nav__link-container">
          <Link className="nav__link" to="/services">
            Услуги
          </Link>
        </li>
        <li className="nav__link-container">
          <Link className="nav__link" to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
