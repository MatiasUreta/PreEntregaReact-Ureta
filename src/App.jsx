import './App.css'
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ItemCounts from './Components/ItemCounts/ItemCounts';
import Error from './Components/Error/Error';

function App() {


  return (
    <>
    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path='/' element={<ItemListContainer greeting={"Pre Entrega 2 React Ureta"}/> } />
      <Route path='/categoria/:categoryId' element={<ItemDetailContainer />} />
      <Route path='/detalle/:id' element={<ItemDetailContainer />} />
      <Route path='/contador' element={<ItemCounts initial={1} stock={2}/>} />
      <Route path='*' element={<Error/>} />
      <Route/>


    </Routes>



       <Footer/>
       

    </BrowserRouter>
      
    </>
  )
}

export default App
