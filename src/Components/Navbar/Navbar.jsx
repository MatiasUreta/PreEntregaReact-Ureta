import React from 'react'
import CardWidget from '../CardWidget/CardWidget'

const Navbar = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <a href="../index.html"><img src="../public/logo_size.jpg" alt="Logo" /></a>
        <ul className='listNavBar' style={{display: 'flex', justifyContent: 'space-between'}}>
            <a href=""><li>Home</li></a>
            <a href=""><li>Nosotros</li></a>
            <a href=""><li>Plan Landing-Page</li></a>
            <a href=""><li>Plan E-commerce</li></a>
            <a href=""><li>Plan Marketing</li></a>
            <a href=""><li>Contacto</li></a>
        </ul>
        <CardWidget/>
    </div>
  )
}

export default Navbar
