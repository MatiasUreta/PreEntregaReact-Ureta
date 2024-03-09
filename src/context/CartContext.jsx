import React, {useState, createContext} from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart,setCart] = useState([])
    const [total,setTotal] = useState (0)

    const agregarCarrito = (producto, cantidad) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.producto.id === producto.id);
            if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingProductIndex].cantidad += cantidad;
                return newCart;
            } else {
                return [...prevCart, {producto, cantidad}];
            }
        });
        setTotal(prevTotal => prevTotal + producto.precio * cantidad);
        setTotalQuantity(prevQuantity => prevQuantity + cantidad);
    }
    
    

    const eliminarItem = (idProducto) => {
        let newCart = cart.filter(item => item.producto.id !== idProducto);
        let itemToRemove = cart.find(item => item.producto.id === idProducto);
        setCart(newCart);
        setTotal(total - itemToRemove.producto.precio * itemToRemove.cantidad);
    }

    const vaciarCarrito = () => {
        setCart([]);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, agregarCarrito, eliminarItem, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
