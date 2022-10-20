import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'> <h1>Libreria Real 📚📚📚  </h1></Link>
            <ul>
                <NavLink to='/category/Magia'>◼️​Libros de conciencia📒​ </NavLink>
                <NavLink to='/category/Ocultismo'>◼️​Libros de sabiduria​​📘</NavLink>
                <NavLink to='/category/Novela'>◼️​Libros de presencia ​📗</NavLink>
            </ul>
            <Link to ="/cart">
            <CartWidget />
            </Link>
            
        </nav>
    );
}; 

export default Navbar;