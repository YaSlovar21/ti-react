import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav header__nav">
      <ul class="nav__menu-list">
        <li class="nav__menu-list-item">
          <NavLink exact to="/" activeClassName="menu__item_active"  className="menu__item">Главная</NavLink>
        </li>
        <li class="nav__menu-list-item">
          <NavLink to="/tips" activeClassName="menu__item_active" className="menu__item">Интернет-магазин</NavLink>
        </li>
      </ul>
      <div class="nav__registration">
          <NavLink to="/recv" className="nav__registration-link">Регистрация</NavLink>
          <NavLink to="/recv" className="nav__registration-link nav__registration-link_enter">Войти</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;