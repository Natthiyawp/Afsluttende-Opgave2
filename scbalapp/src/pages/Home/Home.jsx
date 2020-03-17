import React from 'react';

import Person from '../../components/Home/Person';

import Mest from '../../components/Home/Populære';

import Venden from '../../components/Home/Venden';


const Home = () => {
    return (
        <body className = "row ">
            <Person />

            <Mest />

            <Venden />
            
        </body>
    );
}
 
export default Home;