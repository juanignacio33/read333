import './App.css';
import Navbar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
//import CartWidget from './componentes/CartWidget';
//<CartWidget/>
            
function App() {
    return (
        <>
            <Navbar greeting="Libreria Real!" />
            <ItemListContainer />
        </>
    );
}

export default App;