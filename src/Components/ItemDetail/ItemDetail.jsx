import React, {useState, useContext} from 'react'
import ItemCounts from '../ItemCounts/ItemCounts'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {

  const [cart,setCart] = useState (false)

  const {agregarCarrito} = useContext (CartContext)
  

  const onAdd = (count) => {

    setCart (true)
    agregarCarrito (producto, count)


    console.log(count)

  }



  return (
    <div className='itemDetailCss'>
        <h1>{producto.nombre} </h1>
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.precio} </h2>
        <h2>{producto.descripcion} </h2>
        <h3>Stock: {producto.stock} </h3>

        {cart ? <Link to={'/cart'}>Ir al carrito </Link> : <ItemCounts initial={1} stock={producto.stock} onAdd={onAdd} />}

        
    </div>
  )
}

export default ItemDetail