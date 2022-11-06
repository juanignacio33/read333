import {
    addDoc, collection, documentId, getDocs, query, serverTimestamp, where, writeBatch,
} from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/fireabseConfig';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastMail, setLastMail] = useState('');
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, deleteAll } = useContext(CartContext);
    const totalPrice = total();
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const order = {
                buyer: { name, lastName, lastMail },
                items: cart,
                total: totalPrice,
                date: serverTimestamp(),
            };

            const ids = cart.map((prod) => prod.id);
            const productsRef = collection(db, 'productos');
            const productsAddedFromFirestore = await getDocs(
                query(productsRef, where(documentId(), 'in', ids))
            );

            const { docs } = productsAddedFromFirestore;
            const outOfStock = [];
            const batch = writeBatch(db);
            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDB = dataDoc.stock;
                const productAddedToCart = cart.find(
                    (prod) => prod.id === doc.id
                );

                const prodQuantity = productAddedToCart?.cantidad;
                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();
                const orderRef = collection(db, 'orders');
                const orderAdded = await addDoc(orderRef, order);
                setOrderId(orderAdded.id);
                deleteAll();
            } else {
                console.log('No hay stock de algún producto');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };


    const handleChangeLastMail = (e) => {
        setLastMail(e.target.value);
    };

    if (orderId) {
        return (
            <h1>
                Gracias por tu compra, tu #Clave de seguimiento es: #{orderId}
            </h1>
        );
    }

    return (
        <div
            style={{ minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }}  >
            <form onSubmit={handleSubmit} action="">
                <div>
                    <label for="usa tu nombre">Use su Nombre </label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre..."
                        onChange={handleChangeName}
                        value={name}
                    />
                </div>
                
                <div>
                    <label for="usa tu Apellido">Usa tu Apellido </label>
                     <input
                        type=""
                        name="apellido"
                        placeholder="Apellido..."
                        onChange={handleChangeLastName}
                        value={lastName}
                    /></div>
                <div>
                    <label for="meil por favor">Ingrese su @Mail </label>
                    <input
                        type=""
                        name="Mail"
                        placeholder="gracias por su @mail"
                        onChange={handleChangeLastMail}
                        value={lastMail} />

                </div>
                
                 <button>{loading ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
};

export default Form;