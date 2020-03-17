import React, { useState } from 'react';

import Producer from '../Udtyr/Producer';

import '../Home/populære.scss'

import { NavLink } from 'react-router-dom';

const Mest = () => {
    const [Populære] = useState([

        {
            udstyrfoto: " ur1Web.jpg ",
            udstyrtekst: " SCUBAPRO A1 ",
            produktpris: " 2999 ",
            id: 1
        },
        {
            udstyrfoto: " Tørdragt1Web.jpg ",
            udstyrtekst: " NOVA SCOTIA SEMI 7,5mm ",
            produktpris: " 3699 ",
            id: 2
        },
        {
            udstyrfoto: " fineWeb.jpg ",
            udstyrtekst: " MANTIS M2 ",
            produktpris: " 2895 ",
            id: 3
        },
        {
            udstyrfoto: " udstyrWeb.jpg ",
            udstyrtekst: " SCUBAPRO CHROMIS SCBA ",
            produktpris: "1499",
            id: 4
        }
    ])
    return (
        <body className="row ">
            <h2 className="col-6  ">MEST POPULÆRE DYKKERUDSTYR</h2>

            <h2 className="gray col-6">kkk</h2>

            <figure className="col-12">
                <Producer allproducerProps={Populære} />
            </figure>

            <ul>
            <li className="nav-item nav-link ">
                <NavLink exact to="/DykkerUdstyr" className="navbar_link" activeClassName="navbar_link--active">SE MERE LÆKKERT UDTYR HER</NavLink>
            </li>
            </ul>

        </body>

    );
}

export default Mest;