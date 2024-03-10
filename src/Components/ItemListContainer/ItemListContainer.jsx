import  {useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection,getDocs,query,where } from "firebase/firestore";
import { db } from "../../firebase/Config";

const ItemListContainer = () => {

  const [productos, setProductos] = useState ([]);

  const {categoryId} = useParams ()

  useEffect (()=> {


    //filtrasdo
    const misProductos = 
    categoryId ? 
    query(collection(db,"carrito"), where("categoria","==",categoryId)) : collection (db,"carrito")

    //documentos solicitados
    getDocs (misProductos).then((res) =>{
      const nuevosProductos = res.docs.map((doc) => {
        const data = doc.data ()
        return {id: doc.id, ... data}
      })
      setProductos (nuevosProductos)
     
    })
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
