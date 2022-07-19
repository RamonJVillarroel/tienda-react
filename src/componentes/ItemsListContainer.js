import React, { useState, useEffect } from 'react';
/* import ItenCount from './ItemCount'; */
import ItemList from './ItemList';
import { DotLoader } from 'react-spinners';
import {  useParams} from 'react-router-dom'

const ItemLisContainer = () => {
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    useEffect(() => {

        const productos = async () => {
            try {
                const URL = categoryId
                ? `https://fakestoreapi.com/products/category/${categoryId}`
                : 'https://fakestoreapi.com/products'
                const ProductosUno = await fetch(URL)
                const Data = await ProductosUno.json();
                setProducts(Data);
            }
            catch (err) {
                setError(true);
                console.err(err);
            }
            finally {
                setLoading(false);
            }
        }
        productos();
    }, [categoryId]);
     /*  const onAdd = () =>{
          alert("producto agregado");
      }; */

    return (
        <>
            {loading ? (<div className='grid justify-items-center pt-9'><DotLoader color="#ff80e7" /></div>) :
                error ? <h1>error</h1> :
               <ItemList Products={Products} />
            }
          
        {/*  <ItenCount stock={5} initial ={1} onAdd={onAdd}/>  */}
      </>

    )
}
export default ItemLisContainer