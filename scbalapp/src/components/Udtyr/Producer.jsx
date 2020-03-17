import React from 'react';

import Product from './Product';

const Producer = (props) => {
    const alleUdstyr = props.allproducerProps.map ( s => {
        return (
            <Product productProp = { s } /> 
        );
    });

    return ( 
        <main className = "Producer row">
            { alleUdstyr }
        </main>
     );
}
 
export default Producer;