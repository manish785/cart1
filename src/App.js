import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class  App extends React.Component{

      constructor () {
        super();
        this.state = {
        products: [
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: 'https://media.istockphoto.com/id/496730484/photo/apple-watch-sport-42mm-silver-aluminum-case-with-white-band.jpg?s=612x612&w=0&k=20&c=RY2MGp4S-OVqAZm1ZCUDhM6KSmfAJ02RU51l4mJa2EA=',
                id: 1
            },
            {
                price: 999,
                title: 'Watch',
                qty: 1,
                img: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
                id: 2
            },
            {
                price: 999,
                title: 'EarPods',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2slMjBwcm98ZW58MHx8MHx8fDA%3D&w=1000&q=80',
                id: 3
            }
        ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing();
      }

    handleIncreaseQuantity = (product) =>{
        // console.log('Hey, Please inc the quantity of the product', product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products
        })
    }

    handleDecreaseQuantity = (product) =>{
        // console.log('Hey, Please inc the quantity of the product', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products
        })
    }

    handleDeleteProduct = (id) =>{
      const {products} = this.state;

      const items = products.filter((item)=> item.id !== id );
      this.setState({
          products :items
      })
    }
    
    getCartCount = () =>{
      const {products} = this.state;
      let count = 0;
 
      products.forEach((product) =>{
        count += product.qty;
      })
      return count;
    }

    getCartTotal = () =>{
       const {products} = this.state;

       let cartTotal =0;

       products.map((product) =>{
         cartTotal = cartTotal + product.qty * product.price;
       })

       return cartTotal;
    }

    render (){
      const {products} = this.state;
      return (
        <div className="App">
        {/* <h1> Cart </h1> */}
        <Navbar count={this.getCartCount()}/>
        <Cart
            products={products}
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
            onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style = {{padding : 10 , fontSize: 20}}>Total : {this.getCartTotal()}</div>
        </div>
      );
    }
}

export default App;
