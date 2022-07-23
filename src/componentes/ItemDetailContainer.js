import React, { useState, useEffect } from 'react';
/* estoy en la rama firebase--ramaprincipaol--proyecto */
import ItemDetail from './ItemDetail';
import { DotLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';
import{db} from './firebase';
import { getDoc, collection, doc } from 'firebase/firestore';
const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { productId } = useParams();
  useEffect(() => {
    const productsCollection = collection(db, 'products');
    const docu = doc(productsCollection, productId)
    getDoc(docu).then(result => {
        setProduct({
            id: result.id,
            ...result.data(),
        })
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false))
       /*  const productCollection= collection(bd, 'product'); */
   /*  const getitem = async () => {
      try {
        const URL = productId
          ? `https://fakestoreapi.com/products/${productId}`
          : 'https://fakestoreapi.com/products';
        const response = await fetch(URL);
        const data = await response.json();
        setProduct(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getitem(); */
  }, [productId]);
  return (
    <>
      {loading ? (<div className='grid justify-items-center pt-9'><DotLoader color="#ff80e7" /></div>) :
        error ? <h1>error</h1> : 
          <ItemDetail Producto={product}  />}
     
    </>
  )
}
export default ItemDetailContainer