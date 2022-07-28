import React from 'react';
import NavBar from '../src/componentes/NavBar'
import ItemLisContainer from '../src/componentes/ItemsListContainer'
import './App.css';
import ItemDetailContainer from '../src/componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cart from './componentes/Cart';
import ContextCart from './componentes/CartContext';
import  ContainerFinish from './componentes/ContainerFinish'
function App() {
  return (
    <BrowserRouter>
      <ContextCart>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemLisContainer  />} />
          <Route path="/category/:categoryId" element={<ItemLisContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/Carrito" element={<Cart/>} />
          <Route path="/ContainerFinish" element={<ContainerFinish/>}/>
        </Routes>
      </ContextCart>
    </BrowserRouter>
  );
}

export default App;
