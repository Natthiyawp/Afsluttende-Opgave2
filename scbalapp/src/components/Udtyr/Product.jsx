import React from 'react';


const Product = ( props ) => {
    return ( 
        <figure className = " col-3 Product card ">
             {/* udstyrfoto */}
             <img src={process.env.PUBLIC_URL +"images/ProdoktFoto/" + props.productProp.udstyrfoto} class="card-img-top" alt="Produkt bileder" />

            <center className = " card-text ">
                <p className = " card-body "> { props.productProp.udstyrtekst } </p>

                <p> KR: {props.productProp.produktpris.toLocaleString('da-DK', { minimumFractionDigits: 2 })} ; </p>
            </center>

            {/* <img src={ UR } alt="ek"/> */}

        </figure>
     );
}
 
export default Product;
