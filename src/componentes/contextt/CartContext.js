import React, { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();
const { Provider } = cartContext;

const ContextCart = ({ children }) => {
    const [products, setProducts] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [montoTotal, setMontoTotal] = useState(0)
  
    const getQuantyti = () => {
        let qty = 0;
        let total = 0;
    
        products.forEach(product => {
            qty += product.qty;
            total += product.qty * product.price;
        }
        )
        setQuantity(qty);
        setMontoTotal(total);
    }

    useEffect(() => {
        getQuantyti();
    }, [products])
    const addItem = (product) => {
        if (isInCart(product.id)) {
            const examinar = products.find(p => p.id === product.id);
            const index = products.indexOf(examinar);
            const copi = [...products];
            copi[index].qty += product.qty;
            setProducts(copi);
        } else {
            setProducts([...products, product]);
          
        }

    }
    const removeItem = (id) => {
        const newPoduct = products;
        const indice = newPoduct.findIndex((product) => {
          return product.id === id;
        });
        newPoduct.splice(indice, 1);
        setProducts([...newPoduct]);

    }
    const isInCart = (id) => {
        return products.some(products => products.id === id);
    }
    const clear = () => {
        setProducts([]);
        setQuantity(0);
    }

    return (
        <Provider value={{ products, addItem, removeItem, clear, quantity, montoTotal }}>
            {children}
        </Provider>
    )
}
export default ContextCart