
import ItemCounts from '../ItemCounts/ItemCounts'

const ItemDetail = ({producto}) => {
  return (
    <div>
        <h1>{producto.nombre} </h1>
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.precio} </h2>

        <ItemCounts initial={1}/>
    </div>
  )
}

export default ItemDetail