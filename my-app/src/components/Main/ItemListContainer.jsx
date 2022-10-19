import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'; //-> import por default
import { products } from "../mock.js/ProductsMock";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    //estado

    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res, rej) => 
            {
                /*const producto = products.find((prod)=> prod.id===1);
                HTMLFormControlsCollection.log(producto)*/
                setTimeout(() => {
                    res(products);
                }, 2000);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    //console.log(items);

    return (
        <main>
        <div className="item-list-container">
            <ItemList items={items} />
        </div>
        </main>
    );
};

export default ItemListContainer;