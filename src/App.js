import React from 'react';
import NavBar from '../src/componentes/NavBar'
import ItemLisContainer from '../src/componentes/ItemsListContainer'
import './App.css';
import ItemDetailContainer from '../src/componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Carrito from './componentes/Carrito';
import ContextCart from './componentes/CartContext';


function App() {
  return (
    <BrowserRouter>
      <ContextCart>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemLisContainer />} />
          <Route path="/category/:categoryId" element={<ItemLisContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </ContextCart>
    </BrowserRouter>
  );
}

export default App;
