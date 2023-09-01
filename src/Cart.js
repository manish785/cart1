import CartItem from './CartItem';
import React from 'react';

const Cart = (props) =>  {
    const { products } = props;
    return (
        <div className='cart'>
            {/* <CartItem qty={1} price={99} title={'watch'} img={''} /> */}
            {products.map((product) =>{
                return (
                <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity = {props.onIncreaseQuantity}
                    onDecreaseQuantity = {props.onDecreaseQuantity}
                    onDeleteProduct = {props.onDeleteProduct}
                />
                )
            })}
        </div>
    )
}

export default Cart;