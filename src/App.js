import React from 'react';
import NavBar from './componentes/header/NavBar'
import ItemLisContainer from './componentes/containers/containerList/ItemsListContainer'
import './App.css';
import ItemDetailContainer from './componentes/containers/containerList/containerDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cart from './componentes/containerFinish/Cart';
import ContextCart from './componentes/contextt/CartContext';
import  ContainerFinish from './componentes/containerFinish/ContainerFinish'
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
