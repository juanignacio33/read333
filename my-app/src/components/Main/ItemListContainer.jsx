import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; 
import { products } from "../mock.js/ProductsMock";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItem] = useState([]);
    const { Thot33 } = useParams();

    useEffect(() => {
        const traerProducto = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === Thot33
                );

                const prod = Thot33 ? prodFiltrados : products;
                setTimeout(() => {
                    res(prod);
                }, 300);
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [Thot33]);

    return (
        <main>
            <div className="item-list-container">
                <ItemList items={items} />
            </div>
        </main>
    );
};

export default ItemListContainer;