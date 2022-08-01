import React, { useState, useContext } from "react";
import '../../../header/style.css'
import ItenCount from "./ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../../contextt/CartContext";


const ItemDetail = ({ Producto }) => {
    const [cambio, setCambio] = useState(true)
    const { addItem } = useContext(cartContext)
    const onAdd = (contador) => {
        addItem({ ...Producto, qty: contador });
        setCambio(false);
    };
    return (
        <>       <div className=' grid grid-rows-3 grid-flow-col gap-4 p-20 '>
            <img className='row-span-3 img-detail' src={Producto.image} alt='producto-detalle' />
                <div>
                    
                    <div className='text-xs text-slate-600 uppercase font-bold row-span-2 col-span-2 tracking-widerv p-3'>Nombre: {Producto.title}</div>
                    <div className='font-bold text-slate-700 leading-snug p-3'>
                        <p>Descripcion: {Producto.description}</p>
                    </div>

                    <div className='mt-2 text-sm text-slate-600 p-3'>Precio: {Producto.price}</div>
                    {cambio ? <ItenCount stock={5} initial={1} onAdd={onAdd} /> :
                        <Link to="/Carrito"><button
                        type="submit"
                        className="mt-10 w-full bg-zinc-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                       Finalizar Compra
                      </button></Link>
                    }

                </div>
            </div>
        </>
    )
}

export default ItemDetail