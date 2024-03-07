import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
  return (
    <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id} className='card'>
        <h2 className='card-title'>{producto.nombre}</h2>
        <img src={producto.img} alt={producto.nombre} className='card-image' />
      </div>
    </Link>
  );
};

export default Item;
