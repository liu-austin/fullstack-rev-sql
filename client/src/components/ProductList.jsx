import React from 'react';
import Products from './Products';
  
const ProductList = (props) => {
   return(
    <div className='product-list'>
    <h1>Current Products</h1>
    {
      props.products.length ? 
      (
        props.products.map((product, i) => {
          return (
            <Products getSelected={props.getSelected} key={i} product={product} />
          );
        })
      ) 
      : 
      (
        null   
      )
    }
    </div>
  );
}

export default ProductList