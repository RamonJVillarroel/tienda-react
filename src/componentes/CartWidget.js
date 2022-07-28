import React, { useContext } from "react";
import './style.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from "./CartContext";


const CartWidget = () => {
  const { quantity } = useContext(cartContext)
  /* const [mus, setMus] = useState(true)
  useEffect(() => {
    quantity > 0 ? setMus(false) : setMus(true);
  }) */
  return (
    <>
     {/*  {mus ? (<ShoppingCartIcon />) :
        <><ShoppingCartIcon />
          <p>{quantity}</p></>
      } */}
  {
  quantity>0 ?<><ShoppingCartIcon />
  <p>{quantity}</p></> :<ShoppingCartIcon />
  }
 
  </>

  )
}
export default CartWidget