import ItemCounts from '../ItemCounts/ItemCounts'
import { Link } from 'react-router-dom'

const ItemDetail = ({producto}) => {

  const onAdd = (count) => {
    console.log(count)

  }



  return (
    <div className='itemDetailCss'>
        <h1>{producto.nombre} </h1>
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.precio} </h2>
        <h2>{producto.descripcion} </h2>
        <h3>Stock: {producto.stock} </h3>

        <ItemCounts initial={1} stock={producto.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail