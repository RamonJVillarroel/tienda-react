import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { DotLoader } from 'react-spinners';
import { useParams } from 'react-router-dom'
import { db } from './firebase';
import { getDocs,collection, where,  query} from "firebase/firestore"
const ItemLisContainer = () => {
    const [Products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    useEffect(() => {
   
        const local = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');
           
        getDocs(local)
            .then(resultado => {
                const resul = resultado.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProducts(resul);
                
            })
            .catch(() =>setError(true))
            .finally(() => setLoading(false))
    }, [categoryId]);

    return (
        <>
            {loading ? (<div className='grid justify-items-center pt-9 '><DotLoader color="rgb(20 184 166)" /></div>) :
                error ? <h1>error</h1> :
                    <ItemList Products={Products} />
            }

        </>

    )
}
export default ItemLisContainer

