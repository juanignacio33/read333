import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const [cantidades, setUnidades] = useState(0);

    const { addToCart, getProductQuantity } = useContext(CartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addToCart(item, numero);
        toast.success(`Agregaste ${numero} cantidades`);
    };

    const quantity = getProductQuantity(item.id)

    return (
        <div className="container-detail">
            <ToastContainer />
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>{item.descrip}</p>

                {cantidades === 0 ? (
                    <ItemCount prueba={prueba} stock={item.stock} initial={quantity}
                    />) : (<Link to="/cart">Ir al carrito</Link>)
                }
            </div>
        </div>
    );
};

export default ItemDetail;