import React, { useContext } from "react";
import './style.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from "../contextt/CartContext";


const CartWidget = () => {
  const { quantity } = useContext(cartContext)
  return (
    <>
  {
  quantity>0 ?<><ShoppingCartIcon />
  <p>{quantity}</p></> :<ShoppingCartIcon />
  }
 
  </>

  )
}
export default CartWidget