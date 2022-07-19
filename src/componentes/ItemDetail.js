import React, { useState, useContext } from "react";
/* import { Link } from "react-router-dom"; */
import './menu.css'
import ItenCount from "./ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";

const ItemDetail = ({ Producto }) => {
    const [cambio, setCambio] = useState(true)
    const { addItem } = useContext(cartContext)
    const onAdd = (contador) => {
        addItem({ ...Producto, qty: contador });
        setCambio(false);
    };
    return (
        <>
            <img className='rounded  img-detail' src={Producto.image} alt='producto-detalle' />
            <div className='mt-2'>
                <div>
                    <div className='text-xs text-slate-600 uppercase font-bold tracking-wider'>Nombre:{Producto.title}</div>
                    <div className='font-bold text-slate-700 leading-snug'>
                        <p>Descripcion: {Producto.description}</p>
                    </div>

                    <div className='mt-2 text-sm text-slate-600'>Precio: {Producto.price}</div>
                    {cambio ? <ItenCount stock={5} initial={1} onAdd={onAdd} /> :
                        <Link to="/Carrito"><button className='bg-red-200 hover:bg-red-700 text-xl py-5 px-10'>Finalizar Compra</button></Link>
                    }

                </div>
            </div>
        </>
    )
}

export default ItemDetail