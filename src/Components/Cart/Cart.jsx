import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const { cart, eliminarItem, vaciarCarrito, agregarCarrito, total } = useContext(CartContext);

  const aumentar = (producto) => {
    agregarCarrito(producto, 1);
  }

  const disminuir = (producto) => {
    const item = cart.find(item => item.producto.id === producto.id);
    if (item.cantidad > 1) {
      agregarCarrito(producto, -1);
    } else {
      eliminarItem(producto.id);
    }
  }

  return (
    <div>
        <h1>CARRITO</h1>
        {cart.map(item => {
          const subtotal = item.producto.precio * item.cantidad;
          return (
            <div key={item.producto.id}>
              <h2>{item.producto.nombre}</h2>
              <img src={item.producto.img} alt={item.producto.nombre} />
              <p>Precio por unidad: {item.producto.precio}</p>
              <p>Cantidad: {item.cantidad}</p>
              <button onClick={() => disminuir(item.producto)}>-</button>
              <button onClick={() => aumentar(item.producto)}>+</button>
              <p>Subtotal: {subtotal}</p>
              <button onClick={() => eliminarItem(item.producto.id)}>Eliminar</button>
            </div>
          )
        })}
        <h2>Total: {total}</h2>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
 
    <Link to={'/checkout'}>
    Finalizar compra
    
    </Link>

    </div>
  )
}

export default Cart;


