import React from 'react';

import Dykker from '../../assets/img/scuba2.jpg'

import '../Home/person.scss'

const Person = () => {
    return (
        <body>
            <figure>
                <img src={ Dykker } alt="En person der dykker" />

            </figure>

            <figcaption className= "Person">
                <h3>THE BEST WAY TO OBSERVE A FISK IS TO BECOME A FISH</h3>

                <p>JAQUES COUSTEAU</p>
            </figcaption>
            
        </body>
    );
}
 
export default Person;