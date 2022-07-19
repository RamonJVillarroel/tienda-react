import React, { createContext, useEffect, useState } from 'react';

export const cartContext = createContext();
const { Provider } = cartContext;

const ContextCart = ({ children }) => {
    const [products, setProducts] = useState([])
    const [quantity, setQuantity] = useState(0)

    const getQuantyti = () => {
        let qty = 0;
        products.forEach(product => {
            qty += product.qty;
        }
        )
        setQuantity(qty);
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
        setProducts(products.filter(product => product.id !== id));
    }
    const isInCart = (id) => {
        return products.some(products => products.id === id);
    }
    const clear = () => {
        setProducts([]);
        setQuantity(0);
    }


    return (
        <Provider value={{ products, addItem, removeItem, clear, quantity }}>
            {children}
        </Provider>
    )
}
export default ContextCart