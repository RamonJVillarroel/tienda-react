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
    const handlerClickagregar = () => {
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
            <div className='grid justify-items-center'>
                <div className='mt-10 w-full bg-zinc-600 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 '>{suma}</div>
                <div className=' flex mt-5 '>
                    <button className=' w-full bg-zinc-600   rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ' onClick={resta}>-</button>
                    <button className=' w-full bg-zinc-600  rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ' onClick={() => handlerClickagregar()}>agregar</button>
                    <button className='  w-full bg-zinc-600 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ' onClick={cuenta}>+</button>
                </div>
            </div>
        </>
    )
}
export default ItenCount
