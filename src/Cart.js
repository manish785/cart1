import CartItem from './CartItem';
import React from 'react';

class Cart extends React.Component {
    render () {
       return (
           <div className='cart'>
               <CartItem/>
               <CartItem/>
               <CartItem/>
           </div>
       )
    }
}

export default Cart;