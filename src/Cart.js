import CartItem from './CartItem';
import React from 'react';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
         products: [
             {
                price: 999,
                title: 'I Phone',
                qty: 1,
                img: '',
                id: 1
             },
             {
                price: 999,
                title: 'I Watch',
                qty: 1,
                img: '',
                id: 2
             },
             {
                price: 999,
                title: 'I Paid',
                qty: 1,
                img: '',
                id: 3
             }
         ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
      }
    

    render () {
       const { products } = this.state;

       return (
           <div className='cart'>
               {/* <CartItem qty={1} price={99} title={'watch'} img={''} /> */}
               {products.map((product) =>{
                   return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                    />
                   )
               })}
           </div>
       )
    }
}

export default Cart;