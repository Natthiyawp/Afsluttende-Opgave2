import React from 'react';

import Logo from '../../../assets/img/Logo/ScubaLiving_logo_small.svg';

import Nav from './Nav/Nav';

import '../Header/header.scss';

const Header = () => {
    return (
        <header className = " row navbar navbar-expand-lg navbar-light bg-light">
            <div className = "col-2">
                <a href = "http//google.com" className = "nav-brand">
                    <img src = { Logo } alt = " Logo " />
                </a>
            </div>

            <nav className = "col-10">
            <Nav />

            </nav>

        </header>
    )
}

export default Header
