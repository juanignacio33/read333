import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';


function App({texto }) {
  return (
    <div className="App">
   <Presentacion description= {texto} />
    </div>
  );
}




function App({texto }) {
  return (
    <div>
    <NavBar/>
    <ItemListContainer/>
    </div>
  );
}






export default App;
