import  {useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState ([]);
  const {categoryId} = useParams ()

  useEffect (()=> {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        const data = await response.json()

        if(categoryId){
          const filteredProducts = data.filter((p) => p.categoria == categoryId)
          setProductos(filteredProducts) // Establece los productos filtrados en el estado
        }else{
          setProductos(data)
        }
        
    }catch(error){
      (console.log("Error en el fetcth " + error))
    }
  }
    fetchData()
  }, [categoryId])


  return (
    <div className="container">

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
