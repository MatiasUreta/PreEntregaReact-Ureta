import { useState } from "react"

const ItemCounts = ({initial}) => {

  const [contador, setContador] = useState (1);
  const [agregado, setAgregado] = useState (false);

  const disminuir = () => {
    if (contador > 1) {
      setContador (contador - 1);
    }
  }

  const aumentar = () => {
    setContador(contador + 1);
  }

  const agregarAlCarrito = () => {
    if (!agregado) {
      alert ("Agregaste " + contador);
      setAgregado(true);
    } else {
      alert ("Este producto ya ha sido agregado al carrito.");
    }
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
