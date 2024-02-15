import { useState } from "react"

const ItemCounts = ({initial,stock}) => {

  const [contador, setContador] = useState (1);


  const disminuir = () => {
    if (contador > initial) {
      setContador (contador - 1);
    }
  }

  const aumentar = () => {
    if(contador < stock)
      setContador (contador +1)
  }

  const agregarAlCarrito = () => {
      alert ("Agregaste " + contador);  
  }

  return (
    <div>
      <p> {contador} </p>
      <button onClick={disminuir}>-</button>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      <button onClick={aumentar}>+</button>
    </div>
  )
}

export default ItemCounts
