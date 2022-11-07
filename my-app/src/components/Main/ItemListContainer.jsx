import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/fireabseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { Thot33 } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'productos');
        const referencia = Thot33
            ? query(collectionProd, where('category', '==', Thot33))
            : collectionProd;
        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
        return () => setLoading(true);
    }, [Thot33]);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: '77vh', display: 'flex', justifyContent: 'center',
                }}
            >
                <PropagateLoader style={{ marginTop: '99px' }} color="black" />
                { }
            </div>
        );
    }
    return (
        <main>
            <h2 className='hdos'>☀️​Nuestros mejores y mas recomendables libros digitales!</h2>
            <div className="item-list-container">
                <ItemList items={items} />
            </div>
        </main>
    );
};

export default ItemListContainer;