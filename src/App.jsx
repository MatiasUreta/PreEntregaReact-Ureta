import React, {useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ItemCounts from './Components/ItemCounts/ItemCounts';
import Error from './Components/Error/Error';
import Carousel from './Components/Carousel/Carousel';
import Cart from './Components/Cart/Cart';
import CartProvider from './context/CartContext';
//import { getFirestore,doc,getDoc } from 'firebase/firestore';
//import {getFirestore,collection,getDocs } from 'firebase/firestore'
import {getFirestore, collection, getDocs, query, where } from 'firebase/


function App() {

  //DOCUMENTO
  //const [product,setProduct] = useState (null)

  //useEffect (()=> {
 //   const db = getFirestore()

 //   const productRef = doc(db,"carrito", "A3CO3dYrad1oAgKg7FIO")

  //  getDoc (productRef).then((snapshot) =>{
  //    if (snapshot.exists) {
 //       setProduct ({id:snapshot.id, ...snapshot.data()});
 //     }
 //   })
 // }, []);


  //COLECCION ENTERA
  /*const [products,setProducts] =useState ([])
  useEffect (()=> {
    const db = getFirestore()

    const itemsCollection = collection (db, "carrito")

    getDocs (itemsCollection).then((snapshot)=>{
      setProducts(napshot.docs.map((doc)=>(
        {id:doc.id, ... doc.data()}
      )))
    })
  }, [])
  console.log(products)*/

  //filtrada
  const [products,setProducts]  = useEffect ([])
  useEffect (()=>{
    const db = getFirestore()

    const q = query (
      collection (db,"carrito"),
      where("categotia", "==", "landing")
    )
    getDocs(q).then((snapshot)=>{
      if (snapshot.size === 0){
        console.log("No hay reseltados")
      }
      setProducts(snapshot.docsmap((doc) => (
        {id:doc.id, ... doc.data()}
      )))
    })
  }.[])


  return (
    <>
      <BrowserRouter>

        <CartProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Proyecyo final React Ureta" />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/categoria/:categoryId" element={<ItemDetailContainer />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contador" element={<ItemCounts initial={1} stock={2} />} />
            <Route path="*" element={<Error />} />
          </Routes>

          <Footer />

        </CartProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
