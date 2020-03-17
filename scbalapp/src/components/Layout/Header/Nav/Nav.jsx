import React from 'react';

import { NavLink } from 'react-router-dom';

import '../Nav/nav.scss';

import {Lock} from '../../../../assets/img/Logo/lock-icon-300x300.png';

const Nav = () => {
    return (
        <nav className = "Navbar row collapse navbar-collapse" id = "navbarTogglerDemo03">
            {/* Mobil Mens */}
            <button className = "navbar-toggler mt-lg-0" type = "button" data-taggle = "collapse" data-togglet = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
                <span className = "navbar-toggler-icon"></span>
            </button>

            {/* Sidder */}
            <ul className = "col-6 navbar-nav mr-auto mt-2 mt-lg-0">
                <li className = "nav-item nav-link">
                    <NavLink exact to = "/" className = "navbar_link" activeClassName = "navbar_link--active">HOME</NavLink>
                </li>

                <li className = "nav-item nav-link">
                    <NavLink exact to = "/DykkerUdstyr" className = "navbar_link" activeClassName = "navbar_link--active">DYKKERUDSTYR</NavLink>
                </li>

                <li className = "nav-item nav-link">
                    <NavLink exact to = "/DykkerRejser" className = "navbar_link" activeClassName = "navbar_link--active">DYKKERREJSER</NavLink>
                </li>

                <li className = "nav-item nav-link">
                    <NavLink exact to = "/DykkerKurser" className = "navbar_link" activeClassName = "navbar_link--active">DYKKERKURSER</NavLink>
                </li>

                <li className = "nav-item nav-link">
                    <NavLink exact to = "/Kontakt" className = "navbar_link" activeClassName = "navbar_link--active">KONTAKT</NavLink>
                </li>

                <li className = "nav-item nav-link">
                    <NavLink exact to = "/OmOs" className = "navbar_link" activeClassName = "navbar_link--active">OM OS</NavLink>
                </li>

            </ul>

            <form className = " col-4 form-inline my-2 my-lg-0">
                <input className = "form-control mr-sm-2" type = "search" placeholder = "Search" aria-label = "Search" />

                <button className = "btn btn-outline-success my-2 my-sm-0" type = "submit">Search</button>

            </form>

            <figure>
                <img src={Lock} alt="Lock"/>
            </figure>

        </nav>
    );
}
 
export default Nav;
