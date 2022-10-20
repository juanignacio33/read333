import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <Link to={`/item/${prod.id}`}>
            <article className="card">
                <img src={prod.img} alt={prod.title} />
                <div className="card-info">
                    <h2>Libro: °{prod.title}</h2>
                    <h4>Precio{prod.price}.-</h4>
                    <h5>#Categoria/{prod.category}</h5>
                </div>
            </article>
        </Link>
    );

};
export default Item;