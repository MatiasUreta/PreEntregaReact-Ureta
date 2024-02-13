import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Text from './Components/Text/Text';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {


  return (
    <>
      <Navbar/>
      <Text content={"REACT"}/>
      
    
      <ItemListContainer greeting={"Bienvenidos al E-commerce"} />
      <ItemListContainer id={1} />
    </>
  )
}

export default App
