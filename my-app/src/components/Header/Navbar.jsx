import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Libreria Real </Link>
            <ul>
                <Link to='/category/Magia'>aboros de conciencia</Link>
                <Link to='/category/Ocultismo'>abros de sabiduria</Link>
                <Link to='/category/Novela'>abros de presencia </Link>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;