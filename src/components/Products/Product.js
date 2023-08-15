import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
const Product = ({HandelAddtoCart, product}) => {
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className="product_info">
                <div className="product_upper_info">
                    <h6>{name}</h6>
                    <p>Price: ${price}</p>
                </div>
                <div className="product_lower_info">
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Rating : {ratings} start </small></p>
                </div>
            </div>
            <button onClick={()=> HandelAddtoCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;