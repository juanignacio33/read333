import './App.css';
//import Ejemplo from './components/Ejemplo/Ejemplo';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
            
                <Route path="/"element={<ItemListContainer />}/>
                <Route path="/category"element={<ItemListContainer />}/>
                <Route path="/item"element={<ItemDetailContainer />}/>
                <Route path="/cart"element={<Cart/>}/>
               
                

                 {/*<Route path="/*"element={<h1>Error</h1>}/>*/}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;