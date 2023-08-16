import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    const HandelAddtoCart = (seletedProduct) =>{
        let newCart = [];
        const exist = cart.find(product => product.id === seletedProduct.id);
        if(!exist){
            seletedProduct.quantity = 1;
            newCart = [...cart,seletedProduct];
        }else{
            const rest = cart.filter(product => product.id !== seletedProduct.id);
            exist.quantity = exist.quantity+1;
            newCart = [...rest,exist];
        }

        // const newCart = [...cart,seletedProduct];
        setCart(newCart);
        addToDb(seletedProduct.id);
    }

    useEffect(()=>{
       const strodCard = getShoppingCart();
       const savedCard = [];
        for(const id in strodCard){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                addedProduct.quantity = strodCard[id];
                savedCard.push(addedProduct);
            }
        }

        setCart(savedCard);
        
    },[products])

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