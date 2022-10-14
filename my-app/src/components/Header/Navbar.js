
/*import React from 'react';
import CartWidget from './CartWidget';

class AppContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            temas:['juanV ', 'ignacio', 'benitez' ]
        };
    }
    render () {
        const Items = this.state.temas.map( t => (
            <Items valor= { t } />
        ));
        return (
            <div>
                <Navbar nombre='List Items'/>
                <ul>{Items} </ul>
            </div>
        )
    }
}

function Navbar  ({greeting})  {
    const h1style = {"color":"blue"}
    return (
        <nav>
          <h1 style={h1style}>{greeting}</h1>
            <ul>
                <li>liboros de conciencia</li>
                <li>libros de sabiduria</li>
                <li>libros de presencia </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;

*/


import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav>
            <h1>Libreria Real</h1>
            <ul>
                <li>liboros de conciencia</li>
                <li>libros de sabiduria</li>
                <li>libros de presencia </li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;