import React from 'react'

const Item = ({producto}) => {
  return (
    <div key={producto.id}>
        <h2>{producto.nombre}</h2>
        <img src={producto.img} alt={producto.nombre} />
        <h2>{producto.precio} </h2>
    </div>
  )
}

export default Item