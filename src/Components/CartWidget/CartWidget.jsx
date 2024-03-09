import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  return (
    <div>
        <Link to="/cart">
            <img className='imgCarrito' src="../public/img/carrito-removebg-preview.png" alt="imagen carrito" />
        </Link>
        <p>{totalQuantity == 0 ? null : totalQuantity} </p>
    </div>
  )
}

export default CartWidget;
