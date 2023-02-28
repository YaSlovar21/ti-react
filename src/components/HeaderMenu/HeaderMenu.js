import React from "react";
import { Link } from "react-router-dom";
import './HeaderMenu.css';

import headerLogo from '../../images/ti/logo-ti-full.svg';

function HeaderMenu() {
    return (
        <header className="header">
            <div className="header__up-menu">
            <Link to="/" className="header__logo-link-container">
                <img className="header__logo-img"  src={headerLogo} alt="Лого Ютермо" />
            </Link>
            <div className="header__contacts">
                <a className="bem__link header__contact" href="mailto:info@tochka-izloma.ru" style={{'margin-right': '20px'}}>info@tochka-izloma.ru</a>
                <a className="bem__link header__contact" href="tel:info@tochka-izloma.ru">+7 (3852) 36-51-77</a>
            </div>
            </div>
        </header>
    );
}

export default HeaderMenu;