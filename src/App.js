
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/contacto/contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContex';
import CartContainer from './components/CartContainer/CartContainer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="App-header">
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:reservasId' element={<ItemDetailContainer />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/carrito' element={<CartContainer/>} />
              <Route path='/reservas/:categoryId' element={<ItemListContainer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
