import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    const HandelAddtoCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shoping_container'>
            <div className="shoping_products">
                {
                    products.map(product => <Product 
                        key={product.id} 
                        product={product}
                        HandelAddtoCart={HandelAddtoCart}
                        ></Product>)
                }
            </div>
            <div className="shoping_cart">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;