import React, { useContext, useState } from "react";
import './menu.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from "./CartContext";


const CartWidget = () => {
  const { quantity } = useContext(cartContext)
/*   const [mus, setMus]=useState(true) */
 
  return (
    <>
    {{quantity} >0 ?(<ShoppingCartIcon />):(<ShoppingCartIcon />,<p>{quantity}</p>)
    
    }

    </>

  )
}
export default CartWidget