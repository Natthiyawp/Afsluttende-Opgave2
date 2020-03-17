import React from 'react';

import Malta from '../../assets/img/Rejse/malta.jpg';

import Norge from '../../assets/img/Rejse/norge.JPG';

import '../Rejser/rejser.scss';

const Rejser = () => {
    return (
        <body>
            <figure className = " malta ">
                <img className = "imgMalta" src={Malta} alt="Rejser til Malta" />

                <figcaption>
                <strong>MALTA</strong>

                <p>Oplev skønne Malta og det helt fantasike og sammenhold. Vi arrangerer dykkereser til Malta hele året rungt.</p>

                </figcaption>

            </figure>

            <figure className = " norge ">
                <img className = "imgNorge" src = { Norge } alt=" Rejser til Norgt"/>

                <figcaption>
                <strong>MALTA</strong>

                <p>Oplev skønne Malta og det helt fantasike og sammenhold. Vi arrangerer dykkereser til Malta hele året rungt.</p>

                </figcaption>
            </figure>

            
        </body>


    );
}

export default Rejser;