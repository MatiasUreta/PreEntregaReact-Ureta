
import ItemCounts from '../ItemCounts/ItemCounts'

const ItemDetail = ({producto}) => {
  return (
    <div className='itemDetailCss'>
        <h1>{producto.nombre} </h1>
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.precio} </h2>
        <h2>{producto.descripcion} </h2>
        <h3>Stock: {producto.stock} </h3>

        <ItemCounts initial={1} stock={producto.stock}/>
    </div>
  )
}

export default ItemDetail