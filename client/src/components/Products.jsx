import React from 'react';
  
const Products = (props) => {
  const viewProduct = (e) => {
    props.getSelected(props.product.id);
  };

   return(
    <div onClick={viewProduct} className='product-list-entry'>
    <img className="listimages" src={props.product.image}/>
    <div>
      <h1 className='product-list-entry-title'>{props.product.item}</h1>
      <span className='product-list-entry-detail'>{`Current Bid: ${props.product.curr_bid}`}</span>
      <br />
      <span className='product-list-entry-detail'>{`Bid Ends In ${props.product.ends_in} Days`}</span>
    </div>
    </div>
  )
}

export default Products