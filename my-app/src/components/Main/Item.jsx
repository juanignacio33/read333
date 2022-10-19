import React from 'react';

const Item = ({ prod }) => {
    //console.log(prod);
    //renderizado en el DOM de los productos
    return (
        <article className="card">
                    <img src={prod.img} alt={prod.title} />
            <div className="card-info">
               
                <h2>Libro: °{prod.title}</h2>
                <h4>Precio{prod.price}.-</h4>
                <h5>#Categoria/{prod.category}</h5>
            </div>
        </article>
    );

};
export default Item;