import React, { useState } from 'react';

import Producer from '../../components/Udtyr/Producer';

const DykkerUdstyr = () => {
    const [ UR] = useState([
        
        {
            udstyrfoto: " ur1Web.jpg ",
            udstyrtekst: " SCUBAPRO A1 ",
            produktpris: " 2999 ",
            id: 1
        },

        {
            udstyrfoto: " ur2Web.jpg ",
            udstyrtekst: " SCUBAPRO SPORT ",
            produktpris: " 1999 ",
            id: 2
        },

        {
            udstyrfoto: " ur3Web.jpg ",
            udstyrtekst: " MANTIS M2 ",
            produktpris: " 2895 ",
            id: 3
        },

        {
            udstyrfoto: " ur4Web.jpg ",
            udstyrtekst: " SCUBAPRO CHROMIS SCBA ",
            produktpris: "1499",
            id: 4
        }
    ])

    const [ FINE] = useState([
        
        {
            udstyrfoto: " fine1Web.jpg ",
            udstyrtekst: " INTRODUCES NEW GO FIN ",
            produktpris: " 367 ",
            id: 1
        },

        {
            udstyrfoto: " fine2Web.jpg ",
            udstyrtekst: " SEAC PROPULSIONS ",
            produktpris: " 399 ",
            id: 2
        },

        {
            udstyrfoto: " fine3Web.jpg ",
            udstyrtekst: " SEAC SHOUT ",
            produktpris: " 350 ",
            id: 3
        },

        {
            udstyrfoto: " fine4Web.jpg ",
            udstyrtekst: " TUSA SOLLA ",
            produktpris: " 799 ",
            id: 4
        }
    ])

    const [ TØRDRAGT ] = useState([
        
        {
            udstyrfoto: " Tørdragt1Web.jpg ",
            udstyrtekst: " NOVA SCOTIA SEMI 7,5mm ",
            produktpris: " 3699 ",
            id: 1
        },

        {
            udstyrfoto: " Tørdragt2Web.jpg ",
            udstyrtekst: " EVERDRY 4,0 PRO ",
            produktpris: " 8349 ",
            id: 2
        },

        {
            udstyrfoto: " Tørdragt3Web.jpg ",
            udstyrtekst: " EVERDRY 4 MENS ",
            produktpris: " 8439 ",
            id: 3
        },

        {
            udstyrfoto: " Tørdragt4Web.jpg ",
            udstyrtekst: " EVERFLEX 7/5mm ",
            produktpris: " 2999 ",
            id: 4
        }
    ])

    const [ UDSTYR ] = useState([
        
        {
            udstyrfoto: " udstyr1Web.jpg ",
            udstyrtekst: " BCD HYDROS PRO ",
            produktpris: " 5495 ",
            id: 1
        },

        {
            udstyrfoto: " udstyr2Web.jpg ",
            udstyrtekst: " MAKO CONSOLE ",
            produktpris: " 1084 ",
            id: 2
        },

        {
            udstyrfoto: " udstyr3Web.jpg ",
            udstyrtekst: " DYKKER HASKE ",
            produktpris: " 675 ",
            id: 3
        },

        {
            udstyrfoto: " udstyr4Web.jpg ",
            udstyrtekst: " FULLFACE MASKE L/XL ",
            produktpris: " 2999 ",
            id: 4
        }
    ])
        

    return ( 
        <main>
            <h2 className = " col-8 ">UR</h2>

            <figure className = " col-12 ">
            <Producer allproducerProps = { UR } />
            </figure>

            <h2 className = " col-8 ">FINE</h2>

            <figure className = " col-12 ">
            <Producer allproducerProps = { FINE }/>
            </figure>

            <h2 className = "col-8">TØRDRAGT</h2>

            <figure className = " col-12 ">
            <Producer allproducerProps = { TØRDRAGT } />
            </figure>

            <h2 className = "col-8">DYKKERUDSTYR</h2>

            <figure className = " col-12 ">
            <Producer allproducerProps = { UDSTYR } />
            </figure>

        </main>
     );
}
 
export default DykkerUdstyr;