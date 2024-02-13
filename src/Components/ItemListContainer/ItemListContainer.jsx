import  {useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState ([]);

  useEffect (()=> {
    const fetchData = async () => {
      try {
        const response = await fetch("./productos.json");
        const data = await response.json()
        setProductos(data)
    }catch(error){
      (console.log("Error en el fetcth " + error))
    }
  }
    fetchData()
  }, [])


  return (
    <div>
      <p>{greeting}</p>

      {productos.length == 0 
      ?
      <p>Cargando productos...</p>
      :
      <ItemList productos={productos}/> 
      }
     
    </div>
  )
  
}

export default ItemListContainer