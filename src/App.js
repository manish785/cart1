import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import { firestore } from './firebase';
import {useState, useEffect} from 'react';



function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=> {
      const unsubscribe =  firestore
          .collection("products")
          .onSnapshot((snapshot => {
            const productsData = snapshot.docs.map(doc => {
              const data = doc.data();
              data["id"] = doc.id;
              return data;
            });

            setProducts(productsData);
            setLoading(false);

          }))
      
          return ()=>{
            unsubscribe();
          }
    }, [])
    

    const handleIncreaseQuantity = (product) =>{
      const index = products.indexOf(product);

      const docRef =  firestore.collection("products").doc(products[index].id);
      docRef.update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Updated Successfully');
        return;
      })
      .catch((error) => {
        console.log('Error :', error);
        return;
      })
    }

    const handleDecreaseQuantity = (product) =>{
      const index = products.indexOf(product);
      
      if(products[index].qty === 0){
          return;
      }

      const docRef =  firestore.collection("products").doc(products[index].id);
      docRef.update({
        qty: products[index].qty - 1
      })
      .then(() => {
        console.log('Updated Successfully');
        return;
      })
      .catch((error) => {
        console.log('Error :', error);
        return;
      })
    }

    const handleDeleteProduct = (id) =>{
      const docRef =  firestore.collection("products").doc(id);
      docRef.delete()
      .then(() => {
        console.log('Deleted Successfully');
        return;
      })
      .catch((error) => {
        console.log('Error :', error);
        return;
      })
    }
    
    const getCartCount = () =>{
      let count = 0;
 
      products.forEach((product) =>{
        count += product.qty;
      })
      return count;
    }

    const getCartTotal = () =>{
       let cartTotal =0;

       products.map((product) =>{
         cartTotal = cartTotal + product.qty * product.price;
       })

       return cartTotal;
    }

    // addProduct = (product) =>{
    //   firestore
    //   .collection("products")
    //   .add({
    //     img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOf58ksmvCsF7bidJ8IGuUc_pLnuwXW6w3EBIu9wYK0w&s',
    //     price : 900,
    //     qty : 3,
    //     title : 'washing machine',
    //   })
    //   .then((docRef) => {
    //     console.log('Product has been added', docRef);
    //   })
    //   .catch((error) => {
    //     console.log('Error :', error);
    //   })
    // }



    return (
      <div className="App">
      {/* <h1> Cart </h1> */}
      <Navbar count={getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a Product</button> */}
      <Cart
          products={products}
          onIncreaseQuantity = {handleIncreaseQuantity}
          onDecreaseQuantity = {handleDecreaseQuantity}
          onDeleteProduct = {handleDeleteProduct}
      />
      {loading && <h1>Loading Products</h1>}
      <div style = {{padding : 10 , fontSize: 20}}>Total : {getCartTotal()}</div>
      </div>
    );
  }


export default App;
