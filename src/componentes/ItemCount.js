import React, { useState } from 'react';

const ItenCount = ({ stock, initial, onAdd }) => {
    const [suma, setSuma] = useState(initial)
   
    const cuenta = () => {
        if (suma < stock) {
            setSuma(suma + 1);
        }
        else {
            alert("no puede agregar mas productos ")
        }
    }
    const  handlerClickagregar =()=>{
        onAdd(suma)
    }

    const resta = () => {
        if (suma <= initial) {
            alert("tiene que tener al un  menos productos")
        } else {
            setSuma(suma - 1);
        }
    }

    return (
        <>
            <div className='  grid justify-items-center '>
                <p className='text-xl px-10  bg-red-700 py-5'>{suma}</p>
                <div className='flex '>
                    <button className='bg-red-200 hover:bg-red-700 text-xl py-5 px-10' onClick={resta}>-</button>
                  <button className='bg-red-200 hover:bg-red-700 text-xl py-5 px-10'  onClick={() => handlerClickagregar()}>agregar</button> 
                    <button className='bg-red-200 hover:bg-red-700 text-xl py-5 px-10' onClick={cuenta}>+</button>
                </div>
            </div>
        </>
    )
}
export default ItenCount
