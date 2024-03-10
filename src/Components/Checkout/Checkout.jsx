import React, { useContext, useState } from 'react';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/Config';
import './checkout.css';

const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);

    // Datos del componente
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');

    // Función para manejar el envío del formulario
    const manejadorFormulario = (event) => {
        event.preventDefault();
        alert("Gracias por la compra");

        if (!nombre || !apellido || !telefono || !email) {
            setError("Completar todos los datos requeridos");
            return;
        }
    };;

    return (
        <div>
            <h1>Ingresa tus datos</h1>

            <form onSubmit={manejadorFormulario}>
                {cart.map((producto) => (
                    <div key={producto.producto.id}>
                        <p>
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>
                    </div>
                ))}

                <div>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            name="apellido"
                            onChange={(e) => setApellido(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="telefono">Teléfono</label>
                        <input
                            type="text"
                            name="telefono"
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <button type='submit'> Completar compra</button>

                {error && <p>{error}</p>}

                {ordenId && (
                    <span>
                        Gracias por tu compra
                    </span>
                )}



            </form>
        </div>
    );
};

export default Checkout;
