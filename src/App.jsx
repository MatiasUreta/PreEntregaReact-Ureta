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
//import {getFirestore, collection, getDocs, query, where } from 'firebase/
import Checkout from './Components/Checkout/Checkout';

function App() {



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
            <Route path="/checkout" element={<Checkout />} />
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
