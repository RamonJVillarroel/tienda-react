import React from 'react';
import Item from './Item'

const ItemList = ({Products}) =>{
   
  return(
    <>
    <div className='conte-item-list '>
       {Products.map(Products => (<Item key={Products.id} Products={Products}/>))}
    </div>
    </>
  )
}

export default ItemList